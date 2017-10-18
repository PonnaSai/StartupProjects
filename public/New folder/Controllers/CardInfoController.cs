using BalanceTransfer.Common;
using BalanceTransfer.Filters;
using BalanceTransfer.Models;
using BalanceTransfer.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Web;
using System.Web.Mvc;
using System.Web.SessionState;

namespace BalanceTransfer.Controllers
{
    [Authorize]
    [SessionExpire]
    public class CardInfoController : SharedMvcController
    {
        public ActionResult Index()
        {
            
            if (Session["UserName"] == null)
            {
                string guid = System.Web.HttpContext.Current.Request.Cookies["AuthToken"].Value;
                User userprofile = Utility.GetUserProfile(guid);
                SaveSessionData("UserName", userprofile.UserId);
                SaveSessionData("SecurityToken", userprofile.SecurityToken);               

                var securityTokenCookie = new HttpCookie("SecurityToken");
                securityTokenCookie.Value = userprofile.SecurityToken;
                securityTokenCookie.Expires = DateTime.Now.AddDays(1);               
                HttpContext.Response.Cookies.Add(securityTokenCookie);
                Utility.ClearUserProfile(guid);
            }
            ViewBag.Server = GetServer();

            var fromAccount = GetSessionData<TransferFromAccount>("TransferFromAccount");

            if (fromAccount == null)
            {
                fromAccount = new TransferFromAccount()
                {
                    UDIResponse = new UDIResponse()
                };
            };

            return View(new CardInfoViewModel()
            {
                FromAccount = fromAccount
            });
        }

        [HttpPost]
        public JsonCamelCaseResult GetCardInformation([Bind(Include = "AccountNumber")][System.Web.Http.FromBody] string accountNumber)
        {
            string error = string.Empty;

            try
            {
                TransferFromAccount fromAccount = GetTransferFromAccount(accountNumber);

                if (fromAccount == null)
                {
                    error = "Error Retrieving Account Info.  Contact Appropriate Parties.";
                    Utility.LogMessage(error);
                }
                else
                {
                    SaveSessionData("TransferFromAccount",fromAccount);

                    return new JsonCamelCaseResult(new CardInfoViewModel()
                    {
                        FromAccount = fromAccount,
                    }, JsonRequestBehavior.AllowGet);
                }
            }
            catch (Exception ex)
            {
                Utility.LogMessage("Inq Error - " + ex.ToString());
                error = "Error Occurred Inq Query.  Contact Appropriate Parties.";
            }

            return new JsonCamelCaseResult(new
            {
                error = error,
            }, JsonRequestBehavior.AllowGet);
        }
    }
}
