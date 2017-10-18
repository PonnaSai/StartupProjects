using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Mvc;

namespace BalanceTransfer.Controllers
{
    public class BaseController : Controller
    {
        protected void SaveSessionData<T>(string key, T value)
        {
            Session[key] = value;
        }

        protected T GetSessionData<T>(string key)
        {
            if (Session[key] == null)
                return default(T);
            else
            {
                try
                {
                    return (T)Convert.ChangeType(Session[key], typeof(T));
                }
                catch (InvalidCastException)
                {
                    return default(T);
                }
            }
        }
    }
}
