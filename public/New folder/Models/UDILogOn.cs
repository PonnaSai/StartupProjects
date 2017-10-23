using Microsoft.VisualBasic;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Text;
using System.Xml;
using System.Linq;
using BalanceTransfer.Extensions;

namespace BalanceTransfer
{
    public class UDILogOn : IDisposable
    {
        public string ResponseMsg { get; set; }
        public string SecurityToken { get; set; }
        public string B2K_ResponseCode { get; set; }
        public string B2K_ResponseMsg { get; set; }
        public string TBSM_ResponseCode { get; set; }
        public string TBSM_ResponseMsg { get; set; }
        public string TBSS_ResponseCode { get; set; }
        public string TBSS_ResponseMsg { get; set; }

        #region Public Methods
        public void LogOn(string userID, string password)
        {
            string strReturnXML = null;
            using (UDIBroker.wsBinRoutingSoapClient oBinRouting = new UDIBroker.wsBinRoutingSoapClient())
            {
                try
                {
                    strReturnXML = oBinRouting.Login(CreateInputXMLFrom(userID, password));
                    Parse(strReturnXML);
                }
                catch (Exception)
                {
                    Utility.LogMessage("An error occured while calling UDI Login method");
                    throw;
                }
            }
        }
        #endregion

        #region Private Methods

        private string CreateInputXMLFrom(string userID, string password)
        {
            StringBuilder sb = new StringBuilder();
            sb.Append("<LogOn.UDIB.IN>");
            sb.Append("<UserID>" + userID + "</UserID>");
            sb.Append("<Password>" + password + "</Password>");
            sb.Append("</LogOn.UDIB.IN>");

            return sb.ToString();
        }

        private void Parse(string udiOutputXml)
        {
            try
            {
                var xDoc = new XmlDocument();
                xDoc.LoadXml(udiOutputXml);

                ResponseMsg = xDoc.GetElementValue("/LogOn.UDIB.OUT/Response");
                SecurityToken = xDoc.GetElementValue("/LogOn.UDIB.OUT/SecurityToken");
                B2K_ResponseCode = xDoc.GetElementValue("/LogOn.UDIB.OUT/Status/System[@Name='B']/Code");
                TBSM_ResponseCode = xDoc.GetElementValue("/LogOn.UDIB.OUT/Status/System[@Name='M']/Code");
                TBSS_ResponseCode = xDoc.GetElementValue("/LogOn.UDIB.OUT/Status/System[@Name='S']/Code");
                B2K_ResponseMsg = xDoc.GetElementValue("/LogOn.UDIB.OUT/Status/System[@Name='B']/Message");
                TBSM_ResponseMsg = xDoc.GetElementValue("/LogOn.UDIB.OUT/Status/System[@Name='M']/Message");
                TBSS_ResponseMsg = xDoc.GetElementValue("/LogOn.UDIB.OUT/Status/System[@Name='S']/Message");
            }
            catch (Exception ex)
            {
                throw new ApplicationException(string.Format("Error occured while parsing xml string: {0}", udiOutputXml), ex);
            }
        }

        #endregion

        public void Dispose()
        {
        }
    }
}