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
    public class SelectTransactionController : SharedMvcController
    {
        public ActionResult Index(string accountNumber)
        {
            ViewBag.Server = GetServer();
            return View();
        }
    }
}
