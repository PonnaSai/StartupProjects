using System;
using System.Collections.Generic;
using System.Linq;
using System.Runtime.InteropServices;
using System.Security;
using System.Text;
using System.Web;
using System.Xml;
using System.Xml.XPath;

namespace BTWebAPI
{
    public static class Extensions
    {
        public static string ToUnSecureString(this SecureString secureString)
        {
            IntPtr ssAsIntPtr = IntPtr.Zero;

            try
            {
                ssAsIntPtr = Marshal.SecureStringToGlobalAllocUnicode(secureString);

                char[] chars = new char[secureString.Length];

                for (Int32 i = 0; i < secureString.Length; i++)
                {
                    // multiply 2 because Unicode chars are 2 bytes wide
                    chars[i] = (Char)Marshal.ReadInt16(ssAsIntPtr, i * 2);
                }

                return new string(chars);
            }
            finally
            {
                Marshal.ZeroFreeGlobalAllocUnicode(ssAsIntPtr);
            }
        }

        public static SecureString ToSecureString(this string password)
        {
            var secureStr = new SecureString();
            if (!string.IsNullOrEmpty(password) && password.Length > 0)
            {
                foreach (var c in password.ToCharArray())
                    secureStr.AppendChar(c);
            }
            return secureStr;
        }

        public static TValue GetValue<TKey, TValue>(this IEnumerable<KeyValuePair<TKey, TValue>> pairs, TKey key)
        {
            TValue value = default(TValue);

            var pair = pairs.First(p => p.Key.Equals(key));
            if (!default(KeyValuePair<string, string>).Equals(pair))
                value = pair.Value;

            return value;
        }

        public static IEnumerable<KeyValuePair<string, string>> GetElements(this string xml, string xPath)
        {
            try
            {
                if (!string.IsNullOrEmpty(xml))
                {
                    XmlDocument xDoc = new XmlDocument();
                    xDoc.LoadXml(xml);

                    return xDoc.SelectNodes(xPath)
                        .Cast<XmlNode>()
                        .Select(p => new KeyValuePair<string, string>(p.Name, p.InnerText));
                }
            }
            catch (XmlException)
            {
                throw;
            }

            return new List<KeyValuePair<string, string>>();
        }

        public static string GetElementValue(this XmlDocument doc, string xPath)
        {
            string value = string.Empty;

            try
            {
                var node = doc.SelectSingleNode(xPath);

                if (node != null)
                    value = node.InnerText;
            }
            catch (XPathException)
            {
                throw;
            }

            return value;

        }

        public static string FormatCurrency(this string value)
        {
            string result = string.Empty;

            if (!string.IsNullOrEmpty(value))
            {
                if (value.IndexOf("-") > 0)
                    result = value.Substring(0, value.Length - 3) + "." + value.Substring(value.Length - 3);
                else
                    result = value.Substring(0, value.Length - 2) + "." + value.Substring(value.Length - 2);
            }

            return result.TrimStart('0');
        }

        public static string FormatAllNumeric(this string value)
        {
            StringBuilder sb = new StringBuilder();

            if (!string.IsNullOrEmpty(value))
            {
                for (int i = 0; i <= value.Trim().Length - 1; i++)
                {
                    var number = Convert.ToInt32(value.Substring(i, 1));
                    if (number >= 0 && number <= 9)
                        sb.Append(value.Substring(i, 1));
                }
            }

            return sb.ToString();
        }
    }
}