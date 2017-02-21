using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using WebApiSample.Models;

namespace WebApiSample.Controllers
{
    public class CarDetailController : ApiController
    {
        // GET api/cardetail
        
        [HttpGet]
        public IEnumerable<Carstock> GetAllCarDetails()
        {
            Carstock cs = new Carstock();
            Carstock cs1 = new Carstock();
            List<Carstock> lstCarstock = new List<Carstock>();
            cs.CarName = "Tucosn";
            cs.CarModel = "2017";
            cs.CarPrice = "23465";
            cs.CarColor = "White";

            cs1.CarName = "Camry";
            cs1.CarModel = "2016";
            cs1.CarPrice = "20456";
            cs1.CarColor = "gray";

            lstCarstock.Add(cs);
            lstCarstock.Add(cs1);
            return lstCarstock;
        }


        public IEnumerable<Carstock> GetByID( int ID)
        {
            Carstock cs = new Carstock();
            Carstock cs1 = new Carstock();
            List<Carstock> lstCarstock = new List<Carstock>();
            if (ID == 1)
            {
                cs.CarName = "Tucosn";
                cs.CarModel = "2017";
                cs.CarPrice = "23465";
                cs.CarColor = "White";
            }
            else
            {
                cs1.CarName = "Camry";
                cs1.CarModel = "2016";
                cs1.CarPrice = "20456";
                cs1.CarColor = "gray";
            }

            lstCarstock.Add(cs);
            lstCarstock.Add(cs1);
            return lstCarstock;
        }
        // GET api/cardetail/5
        public string Get(int id)
        {
            return "value";
        }

        // POST api/cardetail
        public void Post([FromBody]string value)
        {
        }

        // PUT api/cardetail/5
        public void Put(int id, [FromBody]string value)
        {
        }

        // DELETE api/cardetail/5
        public void Delete(int id)
        {
        }
    }
}
