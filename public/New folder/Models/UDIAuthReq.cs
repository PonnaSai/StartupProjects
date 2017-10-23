using BalanceTransfer.UDIBroker;
using Microsoft.VisualBasic;
using System;
using System.Collections;
using System.Collections.Generic;
using System.Data;
using System.Diagnostics;
using System.Text;
using System.Xml;
using BalanceTransfer.Extensions;

namespace BalanceTransfer
{
    public class UDIAuthReq
    {
        public string AccountNumber { get; set; }
        public string Token { get; set; }
        public string Expiration { get; set; }
        public string Amount { get; set; }
        public string AuthCode { get; set; }
        public string AuthNumber { get; set; }
        public string ResponseCode { get; set; }
        public string Message { get; set; }

        #region Public Methods

        public void GetAuth()
        {
            using (var oBinRouting = new wsBinRoutingSoapClient())
            {
                try
                {
                    var authXml = oBinRouting.ProcessByAcct(CreateInputXML(), AccountNumber);
                    Parse(authXml);
                }
                catch (Exception ex)
                {
                    Utility.LogMessage("An error occured while calling UDIAuthReq.ProcessByAcct method: " + ex.ToString());
                    throw;
                }
            }
        }

        #endregion

        #region Private methods

        private string CreateInputXML()
        {
            StringBuilder sb = new StringBuilder();

            sb.Append("<AuthorizationRequest.UDIB.IN>");
            sb.Append("<SecurityToken>" + Token + "</SecurityToken>");
            sb.Append("<AccountNumber>" + AccountNumber + "</AccountNumber>");
            sb.Append("<Amount>" + Math.Ceiling(decimal.Parse(Amount)).ToString("0") + "</Amount>");
            sb.Append("<ExpirationDate>" + Expiration + "</ExpirationDate>");
            sb.Append("<MerchantNumber />");
            sb.Append("<CountryCode />");
            sb.Append("<CVV2 />");
            sb.Append("<CVV2Indicator />");
            sb.Append("<MerchantGroup />");
            sb.Append("<Descriptor />");
            sb.Append("<AuthorizationNumber />");
            sb.Append("<SICCode />");
            sb.Append("<Country />");
            sb.Append("<OverrideReturn />");
            sb.Append("<FleetID />");
            sb.Append("</AuthorizationRequest.UDIB.IN>");

            return sb.ToString();
        }

        private void Parse(string authXml)
        {
            try
            {
                XmlDocument xmlDOC = new XmlDocument();
                xmlDOC.LoadXml(authXml);

                ResponseCode = xmlDOC.GetElementValue("/AuthorizationRequest.UDIB.OUT/ResponseCode");
                Message = xmlDOC.GetElementValue("/AuthorizationRequest.UDIB.OUT/Message");
                AuthCode = xmlDOC.GetElementValue("/AuthorizationRequest.UDIB.OUT/AuthorizationResponseCode");
                AuthNumber = xmlDOC.GetElementValue("/AuthorizationRequest.UDIB.OUT/AuthorizationNumber");
            }
            catch (Exception ex)
            {
                throw new ApplicationException(string.Format("Error occured while parsing xml string: {0}", authXml), ex);
            }
        }

        #endregion
    }
}