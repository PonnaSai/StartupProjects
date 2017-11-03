using BTWebAPI.Enumerations;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BTWebAPI.Models
{
    public class TransactionResponse
    {

        public int TransactionID { get; set; }
        //[JsonConverter(typeof(StringEnumConverter))]        
        //public TransactionStatus TransactionStatus { get; set; }
        //public string ResponseMessage { get; set; }
        public string ResponseCode { get; set; }
        public bool PossibleDuplicate { get; set; }
        public int Count { get; set; }
        public Transaction TransactionObj { get; set; }
        public IEnumerable<SelectTransactions> TransactionList { get; set; }
    }
}