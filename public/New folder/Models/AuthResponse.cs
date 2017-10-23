using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BalanceTransfer.Models
{
    public class AuthResponse
    {
        public string AuthCode { get; set; }
        public string ApprovalCode { get; set; }
    }
}