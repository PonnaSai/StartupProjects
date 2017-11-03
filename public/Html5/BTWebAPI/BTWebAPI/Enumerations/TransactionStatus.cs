using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BTWebAPI.Enumerations
{
    public enum TransactionStatus
    {
        Success = 00,
        SecurityTokenInvalid = 01,   //Security Token Invalid
        UnexpectedError = 02,    //Unexpected Error
        NoAccountFound = 03,    //No Account Found
        RequiredFieldInvalid = 04,     //Required Field Invalid
        Declined = 05,   //Declined  
        BTCannotBeModified = 06,
    }
}