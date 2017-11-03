using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace BTWebAPI.Api
{
    public class SharedApiController : ApiController
    {
        protected void SaveSessionData<T>(string key, T value)
        {
            HttpContext.Current.Session[key] = value;
        }

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
                catch(InvalidCastException)
                {
                    return default(T);
                }
            }
        }
    }
}