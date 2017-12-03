using DispatchApp.Models;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.IO;
using System.Linq;
using System.Web;

namespace DispatchApp.ViewModel
{
    public class BusinessCollection
    {
        public IEnumerable<BusinessModel> list { get; set; }

       public IEnumerable<BusinessModel> DisplayData()
        {
            string fileName =   ConfigurationManager.AppSettings["filename"].ToString();
            var abc = HttpContext.Current.Server.MapPath("~/BusinessData");

            IEnumerable<BusinessModel> result = from line in File.ReadAllLines(abc + "/" + fileName).Skip(1)
                         let columns = line.Split(',')
                                                select new BusinessModel
                         {
                             Name = columns[0],
                             Length = string.Empty,
                             Width = string.Empty,
                             Height = string.Empty,
                             Weight = string.Empty,
                             IsFragile = Convert.ToBoolean(columns[4])
                         };

          
            return result;
        }

        public IEnumerable<Validators> GetValidation()
       {
           string fileName = ConfigurationManager.AppSettings["filename"].ToString();
           var abc = HttpContext.Current.Server.MapPath("~/BusinessData");
           IEnumerable<Validators> Validation = from line in File.ReadAllLines(abc + "/" + fileName).Skip(1)
                                                let columns = line.Split(',')
                                                select new Validators
                                                {
                                                    Name = columns[0],
                                                    MaxWeight = Convert.ToDouble(columns[1]),
                                                    MinVolume = Convert.ToInt32(columns[2]),
                                                    MaxVolume = Convert.ToInt32(columns[3]),
                                                    AcceptFragile = Convert.ToBoolean(columns[4])
                                                };
           return Validation;

       }
    }
}