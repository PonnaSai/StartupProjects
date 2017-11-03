using BTWebAPI.UDIBroker;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml;

namespace BTWebAPI.Models
{
    public class UDIBinInfo
    {
        public string BinOwner { get; set; }
        public string BinLocation { get; set; }
        public string Association { get; set; }
        public string HostSystem { get; set; }
        public string InstName { get; set; }

        #region Public Methods

        public void LookupInfoByAccountNumber(string accountNumber)
        {
            using (var oBinRouting = new wsBinRoutingSoapClient())
            {
                try
                {
                    var accountInfoXml = oBinRouting.LookupInfoByAccountNumber(accountNumber);
                    Parse(accountInfoXml);
                }
                catch (Exception)
                {
                    Utility.LogMessage("An error occured while calling UDI LookupInfoByAccountNumber method");
                    throw;
                }
            }
        }

        #endregion

        #region Private Methods

        private void Parse(string accountInfoXml)
        {
            try
            {
                var xDoc = new XmlDocument();
                xDoc.LoadXml(accountInfoXml);

                BinOwner = xDoc.GetElementValue("/BinInfo/BinOwner");
                BinLocation = xDoc.GetElementValue("/BinInfo/BinLocation");
                Association = xDoc.GetElementValue("/BinInfo/BinAssociation");
                InstName = xDoc.GetElementValue("/BinInfo/InstName");

                HostSystem = BinOwner + BinLocation;
            }
            catch (Exception ex)
            {
                throw new ApplicationException(string.Format("Error occured while parsing xml string: {0}", accountInfoXml), ex);
            }
        }

        #endregion
    }
}