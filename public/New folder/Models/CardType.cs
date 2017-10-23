using BalanceTransfer.Interfaces;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace BalanceTransfer.Models
{
    public class CardType : IDropDownListItem
    {
        public object Key { get; set; }
        public object Value { get; set; }
    }
}