using Encryption;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web;
using System.Web.Http;

namespace BalanceTransfer.Api
{
    public class SharedApiController : ApiController
    {
        protected T GetSessionData<T>(string key)
        {
            var session = HttpContext.Current.Session;
            if (session[key] == null)
                return default(T);
            else
            {
                try
                {
                    return (T)Convert.ChangeType(session[key], typeof(T));
                }
                catch (InvalidCastException)
                {
                    return default(T);
                }
            }
        }
    }
}
