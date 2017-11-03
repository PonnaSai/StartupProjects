using BTWebAPI.Common;
using BTWebAPI.EAL;
using BTWebAPI.Models;
using IT.Component;
using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Diagnostics;
using System.Linq;
using System.Net;
using System.Net.Security;
using System.Text;
using System.Web;
using System.Xml;

namespace BTWebAPI
{
    public static class Utility
    {
        private static readonly IDictionary<string, User> _userprofiles = new Dictionary<string, User>();

        private static object _lockObject = new object();

        public static void LogMessage(string message)
        {
            using (var ealService = new EALService())
            {
                try
                {
                    var appName = ConfigurationManager.AppSettings.Get("APPNAME");
                    var serverName = ConfigurationManager.AppSettings.Get("SERVERNAME");
                    int appNum = Int32.Parse(ConfigurationManager.AppSettings.Get("APPNUMBER"));

                    ealService.LogInfo(appNum, global::BTWebAPI.EAL.SEVERITY.INFO, message, serverName, string.Empty);
                }
                catch (Exception ex)
                {
                    LogEvent(ex.ToString() + " occurred while trying to log: '" + message + "'");
                }
            }
        }

        private static void LogEvent(string message)
        {
            const string EVENT_SOURCE_APP = "BTWebAPI";
            const string EVENT_MACHINE = ".";
            const string EVENT_LOGNAME = "Application";

            using (var eventLog = new EventLog(EVENT_LOGNAME, EVENT_MACHINE, EVENT_SOURCE_APP))
            {
                if (!EventLog.SourceExists(EVENT_SOURCE_APP, EVENT_MACHINE))
                {
                    EventSourceCreationData sourceData = new EventSourceCreationData(EVENT_SOURCE_APP, EVENT_LOGNAME);
                    sourceData.MachineName = EVENT_MACHINE;
                }

                eventLog.WriteEntry(message, EventLogEntryType.Warning);
            }
        }

        public static string MaskLoggingInfo(String DataToBeMasked, int StartPosition, int LengthOfMask)
        {
            if (DataToBeMasked.Length >= StartPosition + 1 + LengthOfMask)
            {
                var oldValue = Strings.Mid(DataToBeMasked, StartPosition + 1, LengthOfMask);
                var newValue = "X".PadRight(LengthOfMask, 'X');

                return DataToBeMasked.Replace(oldValue, newValue);
            }

            return DataToBeMasked;
        }

        public static string GetConnectionString()
        {
            BSSecurity oSecurity = new BSSecurity();
            var connectionString = ConfigurationManager.AppSettings.Get("ConnectString");
            return oSecurity.DecryptString(connectionString, "btauth");
        }

        public static AuthResponse Authorize(AuthRequest authRequest)
        {
            AuthResponse authResponse = null;
            string message = string.Empty;

            if (authRequest != null)
            {
                try
                {
                    if (authRequest.AccountType != "D")
                    {
                        //Visa/MasterCard
                        WebClient web = new WebClient();
                        NameValueCollection colFormVariables = new NameValueCollection();

                        string vbVEnrollmentURL = ConfigurationManager.AppSettings.Get("VbVEnrollmentURL");                        
                        //build xml
                        XmlDocument xmlDoc = new XmlDocument();
                        XMLSetup(ref xmlDoc, "AUTHIN");
                        XMLNewNode(ref xmlDoc, "ACCOUNTNUMBER", authRequest.AccountNoTransferTo);
                        XMLNewNode(ref xmlDoc, "EXPDATE", authRequest.CurrExpireDate);
                        XMLNewNode(ref xmlDoc, "AMOUNT", authRequest.Balance.ToString());
                        XMLNewNode(ref xmlDoc, "PROCESSINGTYPE", authRequest.PostingIndicator);
                        XMLNewNode(ref xmlDoc, "POSTINGBUCKET", string.Empty);                       
                        colFormVariables.Add("AUTHXML", xmlDoc.InnerXml);                       
                        ServicePointManager.ServerCertificateValidationCallback =
                            new RemoteCertificateValidationCallback(TrustAllCertsPolicy.ValidateCertificate);

                        string returnValue = Encoding.ASCII.GetString(web.UploadValues(vbVEnrollmentURL, "POST", colFormVariables));
                       
                        xmlDoc = new XmlDocument();
                        xmlDoc.LoadXml(returnValue);

                        authResponse = new AuthResponse()
                        {                            
                            AuthCode = GetElementData(xmlDoc, "RESPONSECODE"),
                            ApprovalCode = GetElementData(xmlDoc, "APPROVALCODE")
                        };
                        message += "after authresponse creation";
                    }
                    else
                    {
                        Utility.LogMessage("Discover authorization for "
                            + Utility.MaskLoggingInfo(authRequest.AccountNoTransferTo, 6, 6));

                        UDIAuthReq oAuthReq = new UDIAuthReq()
                        {
                            Token = authRequest.SecurityToken,
                            AccountNumber = authRequest.AccountNoTransferTo,
                            Expiration = Convert.ToString(authRequest.CurrExpireDate),
                            Amount = authRequest.Balance.ToString()
                        };

                        oAuthReq.GetAuth();

                        authResponse = new AuthResponse()
                        {
                            AuthCode = oAuthReq.AuthCode,
                            ApprovalCode = oAuthReq.AuthNumber
                        };
                    }
                }
                catch (Exception ex)
                {
                    //Utility.LogMessage("Transfer To Account "
                    //    + Utility.MaskLoggingInfo(authRequest.AccountNoPayOff, 6, 6) + " Authorization Failed - "
                    //    + ex.ToString());
                    throw new Exception(ex.Message + "--" + message);
                }
            }

            return authResponse;
        }

        private static void XMLNewNode(ref XmlDocument xmlDoc, string strElement, string strText)
        {
            XmlNode newNode = default(XmlNode);

            newNode = xmlDoc.CreateNode(XmlNodeType.Element, strElement, "");
            newNode.InnerText = strText;
            xmlDoc.DocumentElement.AppendChild(newNode);
        }

        private static void XMLSetup(ref XmlDocument xmlDoc, string strRoot)
        {
            xmlDoc = new XmlDocument();

            xmlDoc.PreserveWhitespace = true;
            xmlDoc.AppendChild(xmlDoc.CreateProcessingInstruction("xml", "version='1.0'"));
            xmlDoc.AppendChild(xmlDoc.CreateElement(strRoot));
        }

        private static string GetElementData(XmlDocument xmldoc, string elementName)
        {
            string result = null;

            try
            {
                result = xmldoc.DocumentElement.GetElementsByTagName(elementName).Item(0).InnerText;
            }
            catch (Exception)
            {
                result = string.Empty;
            }

            return result;
        }

        public static void SetUserProfile(string guid, User profile)
        {
            lock (_lockObject)
            {
                if (profile != null)
                {
                    if (!_userprofiles.ContainsKey(guid))
                    {
                        _userprofiles.Add(
                            new KeyValuePair<string, User>(guid, profile));
                    }
                }
            }
        }

        public static User GetUserProfile(string guid)
        {
            lock (_lockObject)
            {
                if (_userprofiles.ContainsKey(guid))
                {
                    return _userprofiles[guid];
                }
            }

            return null;
        }

        public static void ClearUserProfile(string guid)
        {
            lock (_lockObject)
            {
                if (_userprofiles.ContainsKey(guid))
                {
                    _userprofiles.Remove(guid);
                }
            }
        }       
    }
}