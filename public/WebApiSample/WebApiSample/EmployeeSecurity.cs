using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;
using EmployeeDataAccess;

namespace WebApiSample
{
    public class EmployeeSecurity
    {
        public static bool Login(string username, string password)
        {
            using (TestingDBEntities objEntities = new TestingDBEntities())
            {
                return objEntities.Users.Any(user => user.UserName.Equals(username, StringComparison.OrdinalIgnoreCase)
                    && user.UserPwd == password);
            }
        }
    }
}