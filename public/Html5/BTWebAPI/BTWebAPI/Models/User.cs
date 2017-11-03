using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using System.Xml.Serialization;

namespace BTWebAPI.Models
{
    public class User
    {
        [XmlElement("UserId")]
        public string UserId { get; set; }

        [XmlElement("SecurityToken")]
        public string SecurityToken { get; set; }

        [XmlElement("LastLogin")]
        public DateTime LastLogin { get; set; }

        [XmlElement("CurrentLogin")]
        public DateTime CurrentLogin { get; set; }

        [XmlElement("Active")]
        public bool Active { get; set; }
    }
}