using BalanceTransfer.Common;
using BalanceTransfer.Enumerations;
using BalanceTransfer.Filters;
using BalanceTransfer.Models;
using BalanceTransfer.ViewModel;
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

namespace BalanceTransfer.Controllers
{
    [Authorize]
    [SessionExpire]
    public class BalanceTransferController : SharedMvcController
    {
        public ActionResult Index()
        {
            ViewBag.Server = GetServer();

            var fromAccount = GetSessionData<TransferFromAccount>("TransferFromAccount");

            if (fromAccount != null && fromAccount != null)
            {
                fromAccount.PostingIndicator = null;
                fromAccount.PromoCode = null;

                IList<Transaction> transactions = new List<Transaction>();
                
                var transaction = new Transaction()
                {
                    FromAccount = fromAccount,
                };

                //3 balance transfers
                transactions.Add(transaction);
                transactions.Add(transaction);
                transactions.Add(transaction);

                return View(transactions);
            }

            return RedirectToAction("Index", "CardInfo");
        }
    }
}
