using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Filters;
using System.Text;
using System.Net.Http;
using System.Net;
using System.Threading;
using System.Security.Principal;
using System.Web.Http.Controllers;


namespace WebApiSample
{
    public class BasicAuthentication :AuthorizationFilterAttribute
    {
        public override void OnAuthorization(HttpActionContext actionContext)
        {
            if (actionContext.Request.Headers.Authorization == null)
            {
                actionContext.Response = actionContext.Request.CreateResponse(HttpStatusCode.Unauthorized);
            }
            else
            {
                
                string AuthToken = actionContext.Request.Headers.Authorization.Parameter;
                string DecodeAuthToken = Encoding.UTF8.GetString(Convert.FromBase64String(AuthToken));
                string[] UserNamePwdArray = DecodeAuthToken.Split(':');
                string username = UserNamePwdArray[0];
                string password = UserNamePwdArray[1];

                if (EmployeeSecurity.Login(username, password))
                {
                    Thread.CurrentPrincipal = new GenericPrincipal(new GenericIdentity(username), null);
                }
                else
                {
                    actionContext.Response = actionContext.Request.
                        CreateResponse(HttpStatusCode.Unauthorized);
                }
            }
        } 
    }
}