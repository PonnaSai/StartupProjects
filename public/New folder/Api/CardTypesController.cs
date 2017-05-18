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
    public class CardTypesController : SharedApiController
    {
        private CardTypesRepository _repo;

        public CardTypesController()
        {
            var connString = Utility.GetConnectionString();
            _repo = new CardTypesRepository(connString);
        }

        [HttpGet]
        [Route("api/cardTypes")]
        public IEnumerable<CardType> Get()
        {
            if (_repo != null)
                return _repo.Get();

            return new List<CardType>();
        }
    }
}
