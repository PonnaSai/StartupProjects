using BalanceTransfer.Common;
using BalanceTransfer.Enumerations;
using BalanceTransfer.Models;
using BalanceTransfer.ViewModel;
using BalanceTransfer.Extensions;
using Encryption;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Security;
using System.Text;
using System.Web;
using System.Web.Mvc;
using System.Xml;
using BalanceTransfer.Filters;

namespace BalanceTransfer.Controllers
{
    [Authorize]
    [SessionExpire]
    public class SharedMvcController : BaseController
    {
        #region Protected, Helper Methods

        protected string GetServer()
        {
            string hostName = Dns.GetHostName(); // Retrive the Name of HOST
            var ipHostEntry = Dns.GetHostEntry(hostName);
            if (ipHostEntry.AddressList.Any())
            {
                var ipAddress = ipHostEntry.AddressList.Last().ToString();
                if (!string.IsNullOrEmpty(ipAddress))
                {
                    return ipAddress.Split('.').Last();
                }
            }

            return string.Empty;
        }

        protected TransferFromAccount GetTransferFromAccount(string accountNumber)
        {
            TransferFromAccount fromAccount = null;

            if (!string.IsNullOrEmpty(accountNumber))
            {
                string userName = GetSessionData<string>("UserName");
                string securityToken = GetSessionData<string>("SecurityToken");

                Utility.LogMessage("INQ by user - " + userName + " - on Account No - "
                    + Utility.MaskLoggingInfo(accountNumber, 6, 6));

                UDIGenInq generalInquiry = new UDIGenInq();
                generalInquiry.ProcessByAcct(securityToken, accountNumber);

                UDIBinInfo binInfo = new UDIBinInfo();
                binInfo.LookupInfoByAccountNumber(accountNumber);

                if (string.IsNullOrEmpty(generalInquiry.Message.Trim()))
                {
                    fromAccount = new TransferFromAccount()
                    {
                        AccountNoTransferTo = accountNumber,
                        CorpID = generalInquiry.Corp.PadLeft(6, Convert.ToChar("0")),
                        InstID = generalInquiry.InstID,
                        InstName = string.IsNullOrEmpty(generalInquiry.InstName.Trim()) ? binInfo.InstName : generalInquiry.InstName,
                        ProdSub = generalInquiry.Product,
                        HostSystem = binInfo.HostSystem.ToUpper(),
                        AssociationID = binInfo.Association,
                        CardHolderAddress1 = generalInquiry.Address1,
                        CardHolderAddress2 = generalInquiry.Address2,
                        CardHolderAddress3 = generalInquiry.Address3,
                        CardHolderCity = generalInquiry.City,
                        CardHolderState = generalInquiry.State,
                        CardHolderZip = generalInquiry.Zip,
                        CardHolderPhone = generalInquiry.HomePhone,

                        UDIResponse = new UDIResponse()
                        {

                            Plastic1Type = generalInquiry.Plastic1Type,
                            TypeOfCard = generalInquiry.CommercialCard,
                            Name1 = generalInquiry.Name1.Trim(),
                            Name2 = generalInquiry.Name2.Trim(),
                            Name3 = generalInquiry.Name3.Trim(),
                            Name4 = generalInquiry.Name4.Trim(),
                            BinOwner = binInfo.BinOwner,
                            BlockCode = !string.IsNullOrEmpty(generalInquiry.BlockCode) && generalInquiry.BlockCode.Length == 0 ? "_" : generalInquiry.BlockCode,
                            ReclassCode = !string.IsNullOrEmpty(generalInquiry.ReclassCode) && generalInquiry.ReclassCode.Length == 0 ? "_" : generalInquiry.ReclassCode,
                            Embossing = generalInquiry.EmbossingLine4,
                            AvailableAmount = generalInquiry.AvailableAmount.FormatCurrency(),
                            AvailableCash = generalInquiry.AvailableCashAmount.FormatCurrency(),
                            CardActivationStatus = generalInquiry.CardActvStatus,
                            PreviousAccount = generalInquiry.CrossRefNo,
                        },
                    };

                    if (fromAccount.UDIResponse.TypeOfCard == "50" || fromAccount.UDIResponse.TypeOfCard == "51" || string.IsNullOrEmpty(fromAccount.UDIResponse.Name1.Trim()))
                        fromAccount.CardHolderName = fromAccount.UDIResponse.Name2;
                    else
                        fromAccount.CardHolderName = fromAccount.UDIResponse.Name1;

                    if (fromAccount.HostSystem == "FS" || fromAccount.HostSystem == "FM")
                    {
                        //tbs
                        if (generalInquiry.CurrExpireDate.Length >= 6)
                            fromAccount.UDIResponse.CurrExpireDate = generalInquiry.CurrExpireDate.Substring(4, 2)
                                + generalInquiry.CurrExpireDate.Substring(2, 2);
                        else
                            fromAccount.UDIResponse.CurrExpireDate = generalInquiry.CurrExpireDate.Substring(2, 2)
                                + generalInquiry.CurrExpireDate.Substring(0, 2);
                    }
                    else
                    {
                        //b2k
                        fromAccount.UDIResponse.CurrExpireDate = generalInquiry.CurrExpireDate;
                    }
                }
            }

            return fromAccount;
        }

        #endregion

        public ActionResult Reset()
        {
            SaveSessionData<string>("TransferFromAccount", null);
            return RedirectToAction("Index", "CardInfo");
        }
    }
}
