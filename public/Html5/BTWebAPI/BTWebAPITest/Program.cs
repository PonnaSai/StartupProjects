using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;
using System.Net.Http;
using BTWebAPI.Models;
using System.Web.Script.Serialization;
using System.IO;
using System.Net;
using System.Collections.Specialized;
using System.Xml;
using System.Net.Security;
using BTWebAPI.Common;


namespace BTWebAPITest
{
    class Program
    {

        static void Main(string[] args)
        {
            string username = "P44297";
            string password = "@lt12345";
            string tokenURL = "http://localhost:55293/api/transactions/getsecuritytoken?userid=" + username + "&password=" + password + "";
            string tokenResponse =  GetResponse(tokenURL);

            #region Inserting

            //Transaction modelAdd = new Transaction();
            //modelAdd.AccountNoTransferTo = "4616083809437829";
            //modelAdd.PayeeName = "SITTesting";
            //modelAdd.PayeeAddress = "1234th N ST";
            //modelAdd.PayeeAddress2 = "Sample address";
            //modelAdd.PayeeCity = "St Pete";
            //modelAdd.PayeeState = "Florida";
            //modelAdd.PayeeZip = "33716";
            //modelAdd.ProcessingType = "P";
            //modelAdd.Promocode = "334";
            //modelAdd.AccountNoPayOff = "4147246436641794";
            //modelAdd.Balance = (decimal)231;
            //modelAdd.UserID = "P42749";
            //System.Net.WebRequest requestAdd = System.Net.WebRequest.Create("http://10.7.3.42:80/BTWebAPI/api/transactions/submitnewbt?securityToken=" + tokenResponse + "");
            //requestAdd.Method = "POST";
            //requestAdd.ContentType = "application/json";
            //JavaScriptSerializer serializerAdd = new JavaScriptSerializer();
            //using (var sw = new StreamWriter(requestAdd.GetRequestStream()))
            //{
            //    string json = serializerAdd.Serialize(modelAdd);
            //    sw.Write(json);
            //    sw.Flush();
            //}
            //System.Net.WebResponse responseAdd = requestAdd.GetResponse();

            //System.IO.Stream dataStreamAdd = ((System.Net.WebResponse)responseAdd).GetResponseStream();
            //System.IO.StreamReader readerAdd = new System.IO.StreamReader(dataStreamAdd);
            //string responseFromServerAdd = readerAdd.ReadToEnd();
            //readerAdd.Close();
            //responseAdd.Close();
            //TransactionResponse adddResult = Newtonsoft.Json.JsonConvert.DeserializeObject<TransactionResponse>(responseFromServerAdd);
            #endregion

            #region Update

            Transaction objUpdate = new Transaction();
            objUpdate.PayeeAddress2 = "Sample address1234";
            objUpdate.TransactionID = 170481;
            objUpdate.Action = 'U';
            objUpdate.UserID = "P42749";
            objUpdate.AccountNoPayOff = "4147246436641794";
            objUpdate.Balance = (decimal)233;

            System.Net.WebRequest requestUpdate =
                System.Net.WebRequest.Create("http://10.7.3.42:80/BTWebAPI/api/transactions/modifybt?securityToken=" + tokenResponse + "");
            requestUpdate.Method = "POST";
            requestUpdate.ContentType = "application/json";

            JavaScriptSerializer serializerUpdate = new JavaScriptSerializer();
            using (var sw = new StreamWriter(requestUpdate.GetRequestStream()))
            {
                string json = serializerUpdate.Serialize(objUpdate);
                sw.Write(json);
                sw.Flush();
            }
            System.Net.WebResponse responseUpdate = requestUpdate.GetResponse();

            System.IO.Stream dataStreamUpdate = ((System.Net.WebResponse)responseUpdate).GetResponseStream();
            System.IO.StreamReader readerUpdate = new System.IO.StreamReader(dataStreamUpdate);
            string responseFromServerUpdate = readerUpdate.ReadToEnd();
            readerUpdate.Close();
            responseUpdate.Close();

            TransactionResponse updateResult = Newtonsoft.Json.JsonConvert.DeserializeObject<TransactionResponse>(responseFromServerUpdate);

            #endregion

            #region Delete
            //Transaction objDelete = new Transaction();
            //objDelete.TransactionID = 168379;
            //objDelete.Action = 'D';
            //System.Net.WebRequest requestDelete = System.Net.WebRequest.Create("http://10.7.3.42:80/BTWebAPI/api/transactions/modifybt?securityToken=" + tokenResponse + "");
            //requestDelete.Method = "POST";
            //requestDelete.ContentType = "application/json";

            //JavaScriptSerializer serializerDelete = new JavaScriptSerializer();
            //using (var sw = new StreamWriter(requestDelete.GetRequestStream()))
            //{
            //    string json = serializerDelete.Serialize(objDelete);
            //    sw.Write(json);
            //    sw.Flush();
            //}
            //System.Net.WebResponse responseDelete = requestDelete.GetResponse();

            //System.IO.Stream dataStreamDelete = ((System.Net.WebResponse)responseDelete).GetResponseStream();
            //System.IO.StreamReader readerDelete = new System.IO.StreamReader(dataStreamDelete);
            //string responseFromServerDelete = readerDelete.ReadToEnd();
            //readerDelete.Close();
            //responseDelete.Close();
            //TransactionResponse deleteResult = Newtonsoft.Json.JsonConvert.DeserializeObject<TransactionResponse>(responseFromServerDelete);
            #endregion

            #region GetBTCountForAcctNum
            //string getBTCountURL = "http://10.7.3.42:80/BTWebAPI/api/transactions/getbtcountforacctnum?securityToken=" + tokenResponse + "&accountNumber=4616083809437829";
            //string count = GetResponse(getBTCountURL);
            //TransactionResponse getCountResult = Newtonsoft.Json.JsonConvert.DeserializeObject<TransactionResponse>(count);
            #endregion

            #region GetAllBTsForAcctNum
            //string getAllBTsURL = "http://10.7.3.42:80/BTWebAPI/api/transactions/getallbtsforacctnum?securityToken=" + tokenResponse + "&accountNumber=4616083809437829";
            //string getAllBTsResponse = GetResponse(getAllBTsURL);
            //TransactionResponse getAllBTsResult = Newtonsoft.Json.JsonConvert.DeserializeObject<TransactionResponse>(getAllBTsResponse);
            #endregion

            #region GetBTDetails
            //string getBTDetailsURL = "http://10.7.3.42:80/BTWebAPI/api/transactions/getbtdetails?securityToken=" + tokenResponse + "&id=170475";
            //string getBTDetailsResponse = GetResponse(getBTDetailsURL);
            //TransactionResponse getBTDetailsResult = Newtonsoft.Json.JsonConvert.DeserializeObject<TransactionResponse>(getBTDetailsResponse);
            #endregion

        }

        private static string GetResponse(string url)
        {
            System.Net.WebRequest request = System.Net.WebRequest.Create(url);
            System.Net.WebResponse response = request.GetResponse();
            System.IO.Stream dataStream = response.GetResponseStream();
            System.IO.StreamReader reader = new System.IO.StreamReader(dataStream);
            string responseFromServer = reader.ReadToEnd();
            reader.Close();
            response.Close();
            return responseFromServer;
        }
    }
}
