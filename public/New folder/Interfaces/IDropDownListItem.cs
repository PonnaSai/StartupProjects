using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BalanceTransfer.Interfaces
{
    public interface IDropDownListItem
    {
        object Key { get; set; }
        object Value { get; set; }
    }
}