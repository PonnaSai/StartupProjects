using BTWebAPI.Enumerations;
using BTWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Web.Http;

namespace BTWebAPI.Api
{
    
    public class TransactionsController : SharedApiController
    {
        private TransactionsRepository _repo;

        public TransactionsController()
        {
            var connString = Utility.GetConnectionString();
            _repo = new TransactionsRepository(connString);
        }


        [HttpGet]
        [Route("api/transactions/getbtcountforacctnum")]
        public TransactionResponse GetBTCountForAcctNum(string securityToken, string accountNumber)
        {
            if (_repo != null)
                return _repo.GetCount(securityToken,accountNumber);

            return new TransactionResponse()
            {
                ResponseCode = Convert.ToInt16(TransactionStatus.UnexpectedError).ToString()
            };
        }

        [HttpGet]
        [Route("api/transactions/getbtdetails")]
        public TransactionResponse GetBTDetails(string securityToken, int id)
        {
            if (_repo != null)
            {
                return _repo.GetTransactionDetails(securityToken, id);
            }
            return new TransactionResponse()
            {
                ResponseCode = Convert.ToInt16(TransactionStatus.UnexpectedError).ToString()
            };
        }

        [HttpGet]
        [Route("api/transactions/getallbtsforacctnum")]
        public TransactionResponse GetAllBTsForAcctNum(string securityToken, string accountNumber)
        {
            if (_repo != null && !string.IsNullOrEmpty(accountNumber) && !string.IsNullOrEmpty(securityToken))
                return _repo.GetSelectTransactions(securityToken,accountNumber);

            return new TransactionResponse()
            {
                ResponseCode = Convert.ToInt16(TransactionStatus.UnexpectedError).ToString()
            };
        }

        [HttpPost]
        [Route("api/transactions/submitnewbt")]
        public TransactionResponse SubmitNewBT(string securityToken, Transaction transaction)
        {
            if (_repo != null)
                return _repo.Insert(transaction, securityToken);

            return new TransactionResponse()
            {
                ResponseCode = Convert.ToInt16(TransactionStatus.UnexpectedError).ToString()
            };
        }
        

        [HttpPost]
        [Route("api/transactions/modifybt")]
        public TransactionResponse ModifyBT(string securityToken, Transaction transaction)
        {
           if (_repo != null)
               return _repo.UpdateOrDelete(transaction, securityToken);

            return new TransactionResponse()
            {
                ResponseCode = Convert.ToInt16(TransactionStatus.UnexpectedError).ToString()                 
            };
        }

       
        [HttpGet]
        [Route("api/transactions/getfromaccount/{accountNumber}/{securityToken}")]
        public TransferFromAccount GetFromAccount(string accountNumber, string securityToken)
        {
            if (_repo != null)
            {

                return _repo.GetTransferFromAccount(accountNumber, securityToken);
            }
            return null;
        }

        [HttpGet]
        [Route("api/transactions/getsecuritytoken")]
        public string GetSecurityToken(string userid, string password)
        {
            if (_repo != null)
                return _repo.GetSecurityToken(userid, password);
            return string.Empty;
        }
    }
}