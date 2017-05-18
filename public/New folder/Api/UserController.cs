using BalanceTransfer.Common;
using BalanceTransfer.Filters;
using BalanceTransfer.Models;
using BalanceTransfer.Repositories;
using BalanceTransfer.ViewModel;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;
using System.Web.Security;

namespace BalanceTransfer.Api
{
    [Authorize]
    public class UserController : SharedApiController
    {
        private UserRepository _repo = null;

        public UserController()
        {
            _repo = new UserRepository();
        }

        [HttpGet]
        [Route("api/user")]
        public User Get()
        {
            if (HttpContext.Current.User.Identity.IsAuthenticated)
            {
                string userName = GetSessionData<string>("UserName");

                if (!string.IsNullOrEmpty(userName))
                    return _repo.Get(userName);
            }

            return null;
        }
    }
}
