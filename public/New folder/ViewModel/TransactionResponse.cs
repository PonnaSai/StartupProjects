using BalanceTransfer.Enumerations;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;

namespace BalanceTransfer.ViewModel
{
    public class TransactionResponse
    {
        public int TransactionID { get; set; }
        [JsonConverter(typeof(StringEnumConverter))]
        public TransactionStatus TransactionStatus { get; set; }
        public string ResponseMessage { get; set; }
        public bool IsDuplicate { get; set; }
    }
}
