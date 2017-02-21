using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;
using EmployeeDataAccess;
using System.Threading;

namespace WebApiSample.Controllers
{
    public class EmployeeController : ApiController
    {
        //method to display all the records from table with out any query string parameter
        //public IEnumerable<tblEmployee> Get()
        //{
        //    using (TestingDBEntities entities = new TestingDBEntities())
        //    {
        //        return entities.tblEmployees.ToList();
        //    }
        //}
        //Method to Display employee list based on Id without HttpResponse
        //public tblEmployee Get(int id)
        //{
        //    using (TestingDBEntities entities = new TestingDBEntities())
        //    {
        //        return entities.tblEmployees.FirstOrDefault(e => e.Id ==id);
        //    }
        //}


        //Method to display records with query string using optional parameters
        [BasicAuthentication]
        public HttpResponseMessage Get(string gender = "All")
        {
            string username = Thread.CurrentPrincipal.Identity.Name;
            using (TestingDBEntities objentities = new TestingDBEntities())
            {
                switch (username.ToLower())
                {
                    case "all":
                        return Request.CreateResponse(HttpStatusCode.OK, objentities.tblEmployees.ToList());
                    case "male":
                        return Request.CreateResponse(HttpStatusCode.OK, objentities.tblEmployees.Where(e=>e.Gender.ToLower()=="male").ToList());
                    case "female":
                        return Request.CreateResponse(HttpStatusCode.OK, objentities.tblEmployees.Where(e => e.Gender.ToLower() == "female").ToList());
                    default:
                        return Request.CreateErrorResponse(HttpStatusCode.BadRequest,"Value for Gender must ALL or male or Female" + gender + "invalid");
                }
                
                
            }
        }

        public HttpResponseMessage Get(int id)
        {
            using (TestingDBEntities entities = new TestingDBEntities())
            {
                var entity = entities.tblEmployees.FirstOrDefault(e => e.Id == id);
                if (entity != null)
                {
                    return Request.CreateResponse(HttpStatusCode.OK, entity);
                }
                else
                {
                    return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Employee with ID = " + id.ToString() + "Not found");
                }
            }
        }

        public HttpResponseMessage Post([FromBody]tblEmployee emp)
        {
            try
            {
                TestingDBEntities entitites = new TestingDBEntities();
                entitites.tblEmployees.Add(emp);
                entitites.SaveChanges();


                var message = Request.CreateResponse(HttpStatusCode.Created, emp);
                message.Headers.Location = new Uri(Request.RequestUri + emp.Id.ToString());
                return message;
            }

            catch (Exception e)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, e);
            }
        }

        public HttpResponseMessage Put(int ID, [FromBody] tblEmployee emp)
        {

            try
            {
                using (TestingDBEntities entities = new TestingDBEntities())
                {
                    var entity = entities.tblEmployees.FirstOrDefault(e => e.Id == ID);

                    if (entity == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.BadRequest, "Entity with Id" + ID.ToString() + "not found");
                    }
                    else
                    {
                        entity.Id = emp.Id;
                        entity.Name = emp.Name;
                        entity.Salary = emp.Salary;
                        entity.Gender = emp.Gender;
                        entities.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK, entity);
                    }

                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

        public HttpResponseMessage Delete(int ID)
        {
            try
            {

                using (TestingDBEntities entities = new TestingDBEntities())
                {
                    var entity = entities.tblEmployees.FirstOrDefault(e => e.Id == ID);

                    if (entity == null)
                    {
                        return Request.CreateErrorResponse(HttpStatusCode.NotFound, "Employee with ID = " + ID.ToString() + "Not found");
                    }
                    else
                    {
                        entities.tblEmployees.Remove(entity);
                        entities.SaveChanges();
                        return Request.CreateResponse(HttpStatusCode.OK);
                    }
                   
                }
            }
            catch (Exception ex)
            {
                return Request.CreateErrorResponse(HttpStatusCode.BadRequest, ex);
            }
        }

       
    }
}
