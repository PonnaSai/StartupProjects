using BalanceTransfer.Common;
using BalanceTransfer.Filters;
using BalanceTransfer.Models;
using BalanceTransfer.ViewModel;
using Encryption;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BalanceTransfer.Controllers
{
    [Authorize]
    [SessionExpire]
    public class InquiryController : SharedMvcController
    {
        public ActionResult Index(int? transactionId)
        {
            ViewBag.Server = GetServer();

            var fromAccount = GetSessionData<TransferFromAccount>("TransferFromAccount");

            if (fromAccount != null)
                return View(fromAccount);

            return RedirectToAction("Index", "CardInfo");
        }
    }
}
