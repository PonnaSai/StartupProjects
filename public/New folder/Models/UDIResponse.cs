using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BalanceTransfer.Models
{
    public class UDIResponse
    {
        public string Plastic1Type { get; set; }
        public string CurrExpireDate { get; set; }
        public string BinOwner { get; set; }
        public string BlockCode { get; set; }
        public string ReclassCode { get; set; }
        public string BlockReclass
        {
            get
            {
                return (BlockCode ?? string.Empty) + "/" + (ReclassCode ?? string.Empty);
            }
        }
        public string TypeOfCard { get; set; }
        public string Embossing { get; set; }
        public string AvailableAmount { get; set; }
        public string AvailableCash { get; set; }
        public string Name1 { get; set; }
        public string Name2 { get; set; }
        public string Name3 { get; set; }
        public string Name4 { get; set; }
        public string CardActivationStatus { get; set; }
        public string PreviousAccount { get; set; }
    }
}