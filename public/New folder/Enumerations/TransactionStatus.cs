using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BalanceTransfer.Enumerations
{
    public enum TransactionStatus
    {
        None,
        Approved,   //authorization approved
        Updated,    //updated transaction
        Deleted,    //deleted transaction
        Forced,     //overridden transaction
        Declined,   //authorization declined
        Error,      //Error in Processing Transaction
    }
}