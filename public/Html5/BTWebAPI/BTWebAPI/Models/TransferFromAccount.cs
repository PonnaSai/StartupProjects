using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BTWebAPI.Models
{
    public class TransferFromAccount
    {
        public string AccountNoTransferTo { get; set; }
        public string CorpID { get; set; }
        public String InstID { get; set; }
        public String InstName { get; set; }
        public String MainBankID { get { return CorpID ?? string.Empty + InstName ?? string.Empty; } }
        public String HostSystem { get; set; }
        public String AssociationID { get; set; }
        public String ProdSub { get; set; }
        public String CardHolderName { get; set; }
        public String CardHolderAddress1 { get; set; }
        public String CardHolderAddress2 { get; set; }
        public String CardHolderAddress3 { get; set; }
        public String CardHolderCity { get; set; }
        public String CardHolderState { get; set; }
        public String CardHolderZip { get; set; }
        public String CardHolderPhone { get; set; }

        public UDIResponse UDIResponse { get; set; }

        public string PromoCode { get; set; }
        public string PostingIndicator { get; set; }
    }
}