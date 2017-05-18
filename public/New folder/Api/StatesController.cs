using BalanceTransfer.Filters;
using BalanceTransfer.Models;
using BalanceTransfer.Repositories;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace BalanceTransfer.Api
{
    [Authorize]
    public class StatesController : SharedApiController
    {
        private StatesRepository _repo;

        public StatesController()
        {
            var connString = Utility.GetConnectionString();
            _repo = new StatesRepository(connString);
        }

        [HttpGet]
        [Route("api/states")]
        public IEnumerable<State> Get()
        {
            if (_repo != null)
                return _repo.Get();

            return new List<State>();
        }
    }
}
