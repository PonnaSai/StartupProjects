using System;
using System.Web;
using System.Web.Mvc;
using System.Web.Security;

namespace BalanceTransfer.Filters
{
    [AttributeUsage(AttributeTargets.Class, Inherited = true, AllowMultiple = true)]
    public class SessionExpireAttribute : ActionFilterAttribute
    {
        public override void OnActionExecuting(ActionExecutingContext filterContext)
        {
            HttpContext ctx = HttpContext.Current;

            // check if session is supported
            if (ctx.Session != null)
            {
                if (ctx.Session.IsNewSession)
                {
                    // If it says it is a new session, but an existing cookie exists, then it must have timed out
                    string sessionCookie = ctx.Request.Headers["Cookie"];
                    if ((sessionCookie != null) && (sessionCookie.IndexOf("ASP.NET_SessionId") >= 0))
                    {
                        if (ctx.Request.IsAuthenticated)
                        {
                            FormsAuthentication.SignOut();
                            filterContext.Result = new RedirectResult("~/User/Login");
                        }
                    }
                }
            }

            base.OnActionExecuting(filterContext);
        }
    }
}