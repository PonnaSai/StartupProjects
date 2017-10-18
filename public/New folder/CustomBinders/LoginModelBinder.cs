using BalanceTransfer.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security;
using System.Web;
using System.Web.Mvc;
using BalanceTransfer.Extensions;

namespace BalanceTransfer.CustomBinders
{
    public class LoginModelBinder : IModelBinder
    {
        public object BindModel(ControllerContext controllerContext, ModelBindingContext bindingContext)
        {
            HttpRequestBase request = controllerContext.HttpContext.Request;

            string userName = request.Unvalidated.Form.Get("UserName");
            string passWord = request.Form.Get("Password");

            return new LoginViewModel()
            {
                UserName = userName,
                Password = passWord.ToSecureString()
            };
        }
    }
}