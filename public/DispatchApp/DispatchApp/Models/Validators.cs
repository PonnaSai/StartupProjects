using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DispatchApp.Models
{
    public class Validators
    {
        public string Name { get; set; }

        public double MaxWeight { get; set; }

        public int MinVolume { get; set; }

        public int MaxVolume { get; set; }

        public bool AcceptFragile { get; set; }
    }
}