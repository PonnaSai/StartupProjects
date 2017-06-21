using System.Web;
using System.Web.Mvc;

namespace BalanceTransfer
{
    public class FilterConfig
    {
        public static void RegisterGlobalFilters(GlobalFilterCollection filters)
        {
            filters.Add(new HandleErrorAttribute());
            filters.Add(new NoCacheGlobalActionFilter());
        }
    }

    public class NoCacheGlobalActionFilter : ActionFilterAttribute
    {
        public override void OnResultExecuted(ResultExecutedContext filterContext)
        {
            HttpCachePolicyBase cache = filterContext.HttpContext.Response.Cache;
            cache.SetCacheability(HttpCacheability.NoCache);
            cache.SetMaxAge(new System.TimeSpan(0, 0, 0));
            cache.SetNoStore();

            base.OnResultExecuted(filterContext);
        }
    }
}