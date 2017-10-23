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
using System.Configuration;

namespace BalanceTransfer
{
    public class UDIGenInq
    {
        public string ResponseCode { get; set; }
        public string Message { get; set; }
        public string Corp { get; set; }
        public string Product { get; set; }
        public string BlockCode { get; set; }
        public string ReclassCode { get; set; }
        public string CrossRefNo { get; set; }
        public string CurrExpireDate { get; set; }
        public string AvailableAmount { get; set; }
        public string AvailableCashAmount { get; set; }
        public string Name1 { get; set; }
        public string Name2 { get; set; }
        public string Name3 { get; set; }
        public string Name4 { get; set; }
        public string EmbossingLine4 { get; set; }
        public string Address1 { get; set; }
        public string Address2 { get; set; }
        public string Address3 { get; set; }
        public string City { get; set; }
        public string State { get; set; }
        public string Zip { get; set; }
        public string HomePhone { get; set; }
        public string InstID { get; set; }
        public string InstName { get; set; }
        public string CardActvStatus { get; set; }
        public string CommercialCard { get; set; }
        public string Plastic1Type { get; set; }

        #region Public Methods

        public void ProcessByAcct(string securityToken, string accountNum)
        {
            string strReturnXML = null;
            using (UDIBroker.wsBinRoutingSoapClient oBinRouting = new UDIBroker.wsBinRoutingSoapClient())
            {
                try
                {
                    strReturnXML = oBinRouting.ProcessByAcct(CreateInputXMLFrom(securityToken, accountNum), accountNum);
                    Parse(strReturnXML);
                }
                catch (Exception)
                {
                    Utility.LogMessage("An error occured while calling UDI ProcessByAcct method");
                    throw;
                }
            }
        }

        #endregion

        #region Private Methods

        private string CreateInputXMLFrom(string securityToken, string accountNum)
        {
            var appName =  ConfigurationManager.AppSettings.Get("APPNAME");

            StringBuilder sb = new StringBuilder();

            sb.Append("<GeneralInquiry.UDIB.IN Application='" + appName + "'>");
            sb.Append("<SecurityToken>" + securityToken + "</SecurityToken>");
            sb.Append("<AccountNumber>" + accountNum + "</AccountNumber>");
            sb.Append("</GeneralInquiry.UDIB.IN>");

            return sb.ToString();
        }

        private void Parse(string udiOutputXml)
        {
            try
            {
                var xmlElements = udiOutputXml.GetElements("/GeneralInquiry.UDIB.OUT/*");

                ResponseCode = xmlElements.GetValue("ResponseCode");
                Message = xmlElements.GetValue("Message");
                Corp = xmlElements.GetValue("Corp");
                Product = xmlElements.GetValue("Product");
                BlockCode = xmlElements.GetValue("BlockCode");
                ReclassCode = xmlElements.GetValue("ReclassCode");
                CommercialCard = xmlElements.GetValue("TypeOfProcessing");
                Plastic1Type = xmlElements.GetValue("TypeOfPlasticOne");
                CrossRefNo = xmlElements.GetValue("CrossReferenceNumber");
                CurrExpireDate = xmlElements.GetValue("CurrentExpireDate");
                AvailableAmount = xmlElements.GetValue("AvailableAmount");
                AvailableCashAmount = xmlElements.GetValue("AvailableCashAmount");
                Name1 = xmlElements.GetValue("FirstNameOne") + " "
                    + xmlElements.GetValue("MiddleNameOne") + " "
                    + xmlElements.GetValue("LastNameOne");

                Name2 = xmlElements.GetValue("FirstNameTwo") + " "
                    + xmlElements.GetValue("MiddleNameTwo") + " "
                    + xmlElements.GetValue("LastNameTwo");

                Name3 = xmlElements.GetValue("FirstNameThree") + " "
                    + xmlElements.GetValue("MiddleNameThree") + " "
                    + xmlElements.GetValue("LastNameThree");

                Name4 = xmlElements.GetValue("FirstNameFour") + " "
                    + xmlElements.GetValue("MiddleNameFour") + " "
                    + xmlElements.GetValue("LastNameFour");

                EmbossingLine4 = xmlElements.GetValue("EmbossingLineFour");
                Address1 = xmlElements.GetValue("AddressLineOne");
                Address2 = xmlElements.GetValue("AddressLineTwo");
                Address3 = xmlElements.GetValue("AddressLineThree");
                City = xmlElements.GetValue("City");
                State = xmlElements.GetValue("State");
                Zip = xmlElements.GetValue("Zip");
                HomePhone = xmlElements.GetValue("HomePhone");
                InstID = xmlElements.GetValue("InstitutionId");
                InstName = xmlElements.GetValue("InstitutionName");
                CardActvStatus = xmlElements.GetValue("CardActivationStatus");
            }
            catch (Exception ex)
            {
                throw new ApplicationException(string.Format("Error occured while parsing xml string: {0}", udiOutputXml), ex);
            }
        }

        #endregion

    }
}