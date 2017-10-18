using BalanceTransfer.Models;
using BalanceTransfer.ViewModel;
using Microsoft.VisualBasic;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;
using BalanceTransfer.Extensions;
using BalanceTransfer.Repositories;
using System.Web.SessionState;
using System.Text.RegularExpressions;

namespace BalanceTransfer.Controllers
{
    public class UserController : BaseController
    {
        private UserRepository _repo = null;

        public UserController()
        {
            _repo = new UserRepository();
        }

        public ActionResult Login()
        {
            return View();
        }

        [HttpPost]
        public ActionResult Login([Bind(Include = "UserName, Password")]LoginViewModel loginModel)
        {
            if (ModelState.IsValid)
            {
                Utility.LogMessage("Attempt Login User - " + loginModel.UserName);

                Regex verify = new Regex("^[a-zA-Z0-9]*$");

                if (verify.IsMatch(loginModel.UserName))
                {
                    using (var udiLogon = new UDILogOn())
                    {
                        udiLogon.LogOn(loginModel.UserName, loginModel.Password.ToUnSecureString());

                        if (udiLogon.B2K_ResponseCode == "00" || udiLogon.TBSM_ResponseCode == "00" || udiLogon.TBSS_ResponseCode == "00")
                        {

                            try
                            {
                                SaveSessionData("UserName", loginModel.UserName);
                                SaveSessionData("SecurityToken", udiLogon.SecurityToken);

                                string guid = Guid.NewGuid().ToString();
                                HttpCookie cookie = new HttpCookie("AuthToken", guid);
                                System.Web.HttpContext.Current.Response.Cookies.Add(cookie);

                                //if user exists in the user xml, get the info
                                User user = _repo.Get(loginModel.UserName);

                                if (user != null)
                                {
                                    user.SecurityToken = udiLogon.SecurityToken;
                                    user.Active = true;
                                    user.LastLogin = user.CurrentLogin;
                                    user.CurrentLogin = DateTime.Now;

                                    _repo.Update(user);
                                }
                                else
                                {
                                    user = new Models.User()
                                    {
                                        UserId = loginModel.UserName,
                                        SecurityToken = udiLogon.SecurityToken,
                                        LastLogin = DateTime.Now,
                                        CurrentLogin = DateTime.Now,
                                        Active = true
                                    };

                                    _repo.Add(user);
                                }

                                Utility.SetUserProfile(guid, user);

                                Utility.LogMessage("Successful Login User - " + loginModel.UserName);
                                FormsAuthentication.SetAuthCookie(loginModel.UserName, false);
                                if (Session.IsNewSession)
                                {
                                    Session.Abandon();
                                }

                                return RedirectToAction("Index", "CardInfo");
                            }
                            catch (Exception exp)
                            {
                                string str = exp.Message;
                            }
                        }
                        else
                        {
                            Utility.LogMessage("Failed Login User - " + loginModel.UserName);
                            ModelState.AddModelError("", "Unable to login, please verify that your username and password is correct. If the problem continues, please contact your System Administrator.");
                            return View();
                        }
                    }
                }
                else
                {
                    Utility.LogMessage("Failed Login User - " + loginModel.UserName);
                    ModelState.AddModelError("", "Unable to login, please verify that your username and password is correct. If the problem continues, please contact your System Administrator.");
                    return View();
                }
            }

            return View();
        }

        public ActionResult Logout()
        {
            var userId = GetSessionData<string>("UserName");
            if (!string.IsNullOrEmpty(userId))
            {
                var user = _repo.Get(userId);
                if (user != null)
                {
                    user.Active = false;
                    _repo.Update(user);
                }
            }

            FormsAuthentication.SignOut();

            Session.Clear();
            Session.Abandon();
            Session.RemoveAll();
            if (Request.Cookies["ASP.NET_SessionId"] != null)
            {
                Response.Cookies["ASP.NET_SessionId"].Value = string.Empty;
                Response.Cookies["ASP.NET_SessionId"].Expires = DateTime.Now.AddMonths(-20);
            }


            return RedirectToAction("Login");
        }
    }
}
