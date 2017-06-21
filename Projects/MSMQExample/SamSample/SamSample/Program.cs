
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Xml.Linq;

namespace SamSample
{
    class Program
    {
        static void Main(string[] args)
        {
            ReadSaml();
        }

        public static void ReadSaml()
        {
            XDocument responseDoc = XDocument.Load(@"C:\Users\lc44297\Desktop\SSO\example-saml-response.xml");
            XNamespace pr = "urn:oasis:names:tc:SAML:2.0:protocol";
            XNamespace ast = "urn:oasis:names:tc:SAML:2.0:assertion";


            XElement status = responseDoc.Element(pr + "Response").Element(pr + "Status");
            string statusCode = (string)status.Element(pr + "StatusCode").Attribute("Value");
            string statusMessage = (string)status.Element(pr + "Assertion");



            Console.WriteLine("Status code: {0}; message: {1}.", statusCode, statusMessage);


            XElement attStatement = responseDoc.Element(pr + "Response").Element(ast + "Assertion").Element(ast + "AttributeStatement");
            //string surname = (string)attStatement.Elements(ast + "Attribute").First(a => a.Attribute("AttributeName").Value == "Surname").Element(ast + "AttributeValue");
           // string NameID = (string)attStatement.Elements(ast + "Attribute").First(a => a.Attribute("AttributeName").Value == "NameID").Element(ast + "AttributeValue");
           // string ClientID = (string)attStatement.Elements(ast + "Attribute").First(a => a.Attribute("AttributeName").Value == "ClientID").Element(ast + "AttributeValue");


            Console.WriteLine("First name: {0}, last name: {1}; NRN: {2}", NameID, ClientID);
            Console.ReadLine();
        }
    }


}
