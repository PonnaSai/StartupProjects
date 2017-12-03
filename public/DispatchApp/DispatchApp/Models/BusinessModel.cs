using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace DispatchApp.Models
{
    public class BusinessModel
    {
        public string Name { get; set; }

        public string Length { get; set; }

        public string Width { get; set; }

        public string Height { get; set; }

        public string Weight { get; set; }
            

        public bool IsFragile { get; set; }
    }
}