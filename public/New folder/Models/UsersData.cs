using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Serialization;

namespace BalanceTransfer.Models
{
    [XmlRoot("Users")]
    public class UsersData
    {
        public UsersData()
        {
            Users = new List<User>();
        }

        [XmlElement("User")]
        public List<User> Users { get; set; }
    }
}