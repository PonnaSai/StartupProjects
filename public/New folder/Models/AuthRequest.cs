using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BalanceTransfer.Models
{
    public class AuthRequest
    {
        public string AccountType { get; set; }
        public string AccountNoTransferTo { get; set; }
        public string AccountNoPayOff { get; set; }
        public string CurrExpireDate { get; set; }
        public decimal Balance { get; set; }
        public string PostingIndicator { get; set; }
        public string SecurityToken { get; set; }
    }
}