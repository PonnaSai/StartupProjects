using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BTWebAPI.Models
{
    public class SelectTransactions
    {
        public bool CanEdit { get; set; }
        public int TransactionId { get; set; }
        public string AccountNoTransferTo { get; set; }
        public string TransactionDate { get; set; }
        public string AccountNoPayoff { get; set; }
        public decimal Balance { get; set; }
        public string PayeeName { get; set; }
        public string Status { get; set; }
        public string ProcessDate { get; set; }
    }
}