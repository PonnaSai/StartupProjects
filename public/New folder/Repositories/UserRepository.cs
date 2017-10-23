using BalanceTransfer.Models;
using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Web;
using System.Xml;
using System.Xml.Linq;
using System.Xml.Serialization;

namespace BalanceTransfer.Repositories
{
    public class UserRepository
    {
        private static object _lockobj = new Object();

        public void Add(User user)
        {
            if (user != null)
            {
                List<User> users = null;

                try
                {
                    users = ReadUsersXml();
                    users.Add(user);
                }
                catch
                {
                    users = new List<User>();
                    users.Add(user);
                }

                WriteUsersXml(users);
            }
        }

        public void Update(User user)
        {
            if (user != null)
            {
                User userInfo= null;

                List<User> users = ReadUsersXml();
                userInfo = users.FirstOrDefault(p => p.UserId == user.UserId);

                if (userInfo != null)
                {
                    userInfo.SecurityToken = user.SecurityToken;
                    userInfo.LastLogin = user.LastLogin;
                    userInfo.CurrentLogin = user.CurrentLogin;
                    userInfo.Active = user.Active;
                    WriteUsersXml(users);
                }
            }
        }

        public User Get(string userId)
        {
            if (!string.IsNullOrEmpty(userId))
            {
                List<User> users = ReadUsersXml();
                if (users.Any())
                {
                    return users.FirstOrDefault(p => p.UserId == userId);
                }
            }

            return null;
        }

        private static T Deserialize<T>(XDocument doc)
        {
            XmlSerializer xmlSerializer = new XmlSerializer(typeof(T));

            using (var reader = doc.Root.CreateReader())
            {
                return (T)xmlSerializer.Deserialize(reader);
            }
        }

        private static XDocument Serialize<T>(T value)
        {
            XmlSerializer xmlSerializer = new XmlSerializer(typeof(T));

            XDocument doc = new XDocument();
            using (var writer = doc.CreateWriter())
            {
                xmlSerializer.Serialize(writer, value);
            }

            return doc;
        }

        private List<User> ReadUsersXml()
        {
            UsersData usersData = new UsersData();

            lock (_lockobj)
            {
                try
                {
                    string fileName = HttpContext.Current.Server.MapPath("~\\\\Users.xml");
                    XDocument xml = XDocument.Load(fileName);
                    usersData = Deserialize<UsersData>(xml);
                }
                catch (FileNotFoundException)
                {
                    //catch it and do nothing new xml file will be created
                }
            }

            return usersData.Users;
        }

        private void WriteUsersXml(List<User> users)
        {
            lock (_lockobj)
            {
                if (users != null && users.Any())
                {
                    string fileName = HttpContext.Current.Server.MapPath("~\\\\Users.xml");
                    var usersData = new UsersData() { Users = users };
                    XDocument doc = Serialize<UsersData>(usersData);
                    doc.Save(fileName);
                }
            }
        }
    }
}