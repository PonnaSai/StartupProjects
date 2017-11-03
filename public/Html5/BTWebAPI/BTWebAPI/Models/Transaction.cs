using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.Linq;
using System.Web;

namespace BTWebAPI.Models
{
    public class Transaction
    {
        public int TransactionID { get; set; }
        public string UserID { get; set; }
        public string TransactionDate { get; set; }
        public string PostingDate { get; set; }
        public string ReturnDate { get; set; }
        public string ReturnReason { get; set; }
        public string ProcessDate { get; set; }
        public string PaymentIssueDate { get; set; }
        public string ActionTaken { get; set; }

        [Required]
        public string PayeeName { get; set; }

        [Required]
        public string PayeeAddress { get; set; }

        public string PayeeAddress2 { get; set; }

        [Required]
        public string PayeeCity { get; set; }

        [Required]
        public string PayeeState { get; set; }

        [Required]
        public string PayeeZip { get; set; }

        public string PayeePhone { get; set; }

        public string TranDesc { get; set; }

        public int CardTypeID { get; set; }

        [Required]
        public string AccountNoPayOff { get; set; }

        [Required]
        public decimal Balance { get; set; }

        public decimal OldBalance { get; set; }
        public string MemoDesc { get; set; }
        public bool ProcessFlag { get; set; }
        public DateTime BTProcessDate { get; set; }
        public string AuthCode { get; set; }
        public string ApprovalCode { get; set; }
        public char Action { get; set; }
        public string ProcessingType { get; set; }
        public string Promocode { get; set; }
        public string AccountNoTransferTo { get; set; }

        public TransferFromAccount FromAccount { get; set; }
    }
}