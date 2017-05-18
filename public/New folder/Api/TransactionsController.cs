using BalanceTransfer.Common;
using BalanceTransfer.Enumerations;
using BalanceTransfer.Filters;
using BalanceTransfer.Models;
using BalanceTransfer.Repositories;
using BalanceTransfer.ViewModel;
using Encryption;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Net.Security;
using System.Text;
using System.Web.Http;
using System.Xml;

namespace BalanceTransfer.Api
{
    [Authorize]
    public class TransactionsController : SharedApiController
    {
        private TransactionsRepository _repo;

        public TransactionsController()
        {
            var connString = Utility.GetConnectionString();
            _repo = new TransactionsRepository(connString);
        }

        [HttpGet]
        [Route("api/transactions/count/{accountNumber}")]
        public int Count(string accountNumber)
        {
            if (_repo != null)
                return _repo.GetCount(accountNumber);

            return 0;
        }

        [HttpGet]
        [Route("api/transactions/{accountNumber}/{id:int}")]
        public Transaction Get(string accountNumber, int? id)
        {
            if (_repo != null)
                return _repo.GetTransaction(accountNumber, id);

            return null;
        }

        [HttpGet]
        [Route("api/transactions/select/{accountNumber}")]
        public IEnumerable<SelectTransactions> Select(string accountNumber)
        {
            if (_repo != null && !string.IsNullOrEmpty(accountNumber))
                return _repo.GetSelectTransactions(accountNumber);

            return new List<SelectTransactions>();
        }

        [HttpPost]
        [Route("api/transactions/delete")]
        public TransactionResponse Delete(Transaction transaction)
        {
            string userName = GetSessionData<string>("UserName");

            if (_repo != null)
                return _repo.Delete(transaction, userName);

            return new TransactionResponse()
            {
                TransactionStatus = TransactionStatus.Error,
                ResponseMessage = "Unknown Error, Contact Appropriate Parties."
            };
        }

        [HttpPost]
        [Route("api/transactions/update")]
        public TransactionResponse Update(Transaction transaction)
        {
            string userName = GetSessionData<string>("UserName");
            string securityToken = GetSessionData<string>("SecurityToken");

            if (_repo != null)
                return _repo.InsertOrUpdate(transaction, userName, securityToken);

            return new TransactionResponse()
            {
                TransactionStatus = TransactionStatus.Error,
                ResponseMessage = "Unknown Error, Contact Appropriate Parties."
            };
        }

        [HttpPost]
        [Route("api/transactions/add")]
        public TransactionResponse Add(Transaction transaction)
        {
            string userName = GetSessionData<string>("UserName");
            string securityToken = GetSessionData<string>("SecurityToken");

            if (_repo != null)
                return _repo.InsertOrUpdate(transaction, userName, securityToken);

            return new TransactionResponse()
            {
                TransactionStatus = TransactionStatus.Error,
                ResponseMessage = "Unknown Error, Contact Appropriate Parties."
            };
        }
    }
}
