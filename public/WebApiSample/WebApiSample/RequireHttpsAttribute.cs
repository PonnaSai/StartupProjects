using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http.Filters;
using System.Net.Http;
using System.Text;

namespace WebApiSample
{
    public class RequireHttpsAttribute : AuthorizationFilterAttribute
    {
    //    public override void OnAuthorization(System.Web.Http.Controllers.HttpActionContext actionContext)
    //    {
    //        if (actionContext.Request.RequestUri.Scheme != Uri.UriSchemeHttps)
    //        {
    //            actionContext.Response = actionContext.Request.CreateResponse(System.Net.HttpStatusCode.Found);
    //            actionContext.Response.Content = new StringContent("<p>Use Https instead of Http</p>",Encoding.UTF8, "text/html");
    //            UriBuilder uriBuilder = new UriBuilder(actionContext.Request.RequestUri);
    //            uriBuilder.Scheme = Uri.UriSchemeHttps;
    //            uriBuilder.Port = 44300;

    //            actionContext.Response.Headers.Location = uriBuilder.Uri;
    //        }
    //        else
    //        {
    //            base.OnAuthorization(actionContext);
    //        }
    //    } 
    }
}