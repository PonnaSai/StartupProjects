using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Http;
using System.Web;
using System.Web.Helpers;
using System.Web.Http.Controllers;
using System.Web.Http.Filters;

namespace BalanceTransfer.Filters
{
    public class AntiForgeryFilter : ActionFilterAttribute
    {
        public override void OnActionExecuting(HttpActionContext actionContext)
        {
            ValidateRequestHeader(actionContext.Request);
            base.OnActionExecuting(actionContext);
        }

        private void ValidateRequestHeader(HttpRequestMessage request)
        {
            string cookieToken = "";
            string formToken = "";

            IEnumerable<string> tokenHeaders;
            if (request.Headers.TryGetValues("RequestVerificationToken", out tokenHeaders))
            {
                string[] tokens = tokenHeaders.First().Split(':');
                if (tokens.Length == 2)
                {
                    cookieToken = tokens[0].Trim();
                    formToken = tokens[1].Trim();
                }
            }
            AntiForgery.Validate(cookieToken, formToken);
        }
    }
}