using BTWebAPI.Api;
using BTWebAPI.Enumerations;
using BTWebAPI.Models;
using System;
using System.Collections.Generic;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace BTWebAPI
{
    public class TransactionsRepository : SharedApiController
    {
        private string _connectionString = null;        
        private string securityToken = string.Empty;
        string message = string.Empty;

        public TransactionsRepository(string connectionString)
        {
            _connectionString = connectionString;
        }
       

        public TransactionResponse Delete(Transaction transaction, string userName)
        {
            var transactionResponse = new TransactionResponse();
                      
            if (!string.IsNullOrEmpty(_connectionString) && transaction != null)
            {   
                using (var conn = new SqlConnection(_connectionString))
                {
                    try
                    {
                        conn.Open();                        
                        var cmd = new SqlCommand("spDeleteTranData", conn);
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("@TransactionID", SqlDbType.Int).Value = transaction.TransactionID;
                        cmd.Parameters.Add("@UserID", SqlDbType.VarChar).Value = userName.ToUpper();

                        int rowsAffected = cmd.ExecuteNonQuery();

                        if (rowsAffected != 0)
                            transactionResponse.ResponseCode = Convert.ToInt16(TransactionStatus.Success).ToString().PadLeft(2, '0');                       
                    }
                    catch (Exception ex)
                    {
                        Utility.LogMessage("BT Delete Error - TransactionID- " + transaction.TransactionID + "-" + ex.ToString());
                        transactionResponse.ResponseCode = Convert.ToInt16(TransactionStatus.UnexpectedError).ToString().PadLeft(2, '0');
                    }
                    finally
                    {
                        conn.Close();
                    }
                }
            }

            return transactionResponse;
        }

        public TransactionResponse GetCount(string securityToken, string accountNumber)
        {
            var response = new TransactionResponse();            

            if (!string.IsNullOrEmpty(securityToken))
            {
                try
                {
                    UDIGenInq generalInquiry = new UDIGenInq();
                    if (generalInquiry.VerifySecurityToken(securityToken, accountNumber))
                    {
                        if (!string.IsNullOrEmpty(_connectionString))
                        {
                            using (var conn = new SqlConnection(_connectionString))
                            {
                                try
                                {
                                    conn.Open();
                                    var cmd = new SqlCommand("spSelectTransactionCount", conn);
                                    cmd.CommandType = CommandType.StoredProcedure;
                                    cmd.Parameters.Add("@AccountNoTransferTo", SqlDbType.VarChar).Value = accountNumber;
                                    int count = Convert.ToInt32(cmd.ExecuteScalar());
                                    response.Count = count;
                                    response.ResponseCode =  Convert.ToInt32(TransactionStatus.Success).ToString().PadLeft(2,'0'); 
                                }
                                catch (Exception ex)
                                {
                                    Utility.LogMessage("GetTransactionsCount Error for Account Number - " + accountNumber + "-" + ex.ToString());
                                    response.ResponseCode = Convert.ToInt16(TransactionStatus.UnexpectedError).ToString().PadLeft(2, '0');                                    
                                }
                                finally
                                {
                                    conn.Close();
                                }
                            }
                        }
                    }
                    else
                    {
                        response.ResponseCode = Convert.ToInt16(TransactionStatus.SecurityTokenInvalid).ToString().PadLeft(2, '0') + " OR " + Convert.ToInt16(TransactionStatus.NoAccountFound).ToString().PadLeft(2, '0');
                    }
                }
                catch (Exception ex)
                {
                    Utility.LogMessage("Error Occurred while get the Transaction count- AccountNumber-" + accountNumber + "-" + ex.Message.ToString());
                    response.ResponseCode = Convert.ToInt16(TransactionStatus.UnexpectedError).ToString().PadLeft(2, '0'); 
                }
            }
            else
            {
                response.ResponseCode = Convert.ToInt16(TransactionStatus.UnexpectedError).ToString().PadLeft(2, '0');
            }
            return response;
        }

        public TransactionResponse UpdateOrDelete(Transaction transaction, string securityToken)
        {
            var response = new TransactionResponse();
            

            if (!string.IsNullOrEmpty(_connectionString)
                && transaction != null && transaction.TransactionID.ToString().Length > 0)
            {
                if (!string.IsNullOrEmpty(securityToken))
                {
                    try
                    {
                        Transaction oldTransaction = GetTransaction(transaction.TransactionID);

                        UDIGenInq generalInquiry = new UDIGenInq();
                        if (generalInquiry.VerifySecurityToken(securityToken, oldTransaction.AccountNoTransferTo))
                        {
                            try
                            {
                                bool authorize = false;
                                
                                if (transaction.Action.Equals('U')) 
                                {                                    
                                    //updating the transaction  
                                    if ((oldTransaction.ProcessFlag.ToString().Equals("False")) && (oldTransaction.ActionTaken.Equals("E") || oldTransaction.ActionTaken.Equals("T") || oldTransaction.ActionTaken.Equals("F")))
                                    {
                                        response.ResponseCode = Convert.ToInt16(TransactionStatus.Success).ToString().PadLeft(2, '0');

                                        //always authorize if amount is changed 
                                        if (transaction.Balance > 0)
                                            authorize = (oldTransaction.Balance != transaction.Balance);


                                        if (authorize)
                                        {
                                            TransferFromAccount fromAccount = GetTransferFromAccount(oldTransaction.AccountNoTransferTo, securityToken);
                                            transaction.FromAccount = fromAccount;
                                            var authRequest = new AuthRequest()
                                            {
                                                AccountNoPayOff = transaction.AccountNoPayOff,
                                                AccountNoTransferTo = transaction.FromAccount.AccountNoTransferTo,
                                                AccountType = transaction.FromAccount.UDIResponse.Plastic1Type,
                                                Balance = transaction.Balance,
                                                CurrExpireDate = transaction.FromAccount.UDIResponse.CurrExpireDate,
                                                PostingIndicator = transaction.ProcessingType,
                                                SecurityToken = securityToken
                                            };

                                            var authResponse = Utility.Authorize(authRequest);

                                            if (authResponse != null && authResponse.AuthCode == "00")
                                            {
                                                response.ResponseCode = Convert.ToInt16(TransactionStatus.Success).ToString().PadLeft(2, '0');
                                            }
                                            else
                                            {
                                                transaction.ActionTaken = "F";
                                                response.ResponseCode = Convert.ToInt16(TransactionStatus.Declined).ToString().PadLeft(2, '0');
                                            }
                                        }

                                            // if after 7 pm add day
                                            transaction.PostingDate = (DateTime.Now.Hour > 19)
                                                ? DateTime.Now.AddDays(1).ToShortDateString()
                                                : DateTime.Now.ToShortDateString();

                                            transaction.UserID = transaction.UserID.ToUpper();
                                            response.TransactionID = UpdateTransaction(transaction);
                                            response.ResponseCode = Convert.ToInt16(TransactionStatus.Success).ToString().PadLeft(2, '0');
                                        
                                    }
                                    else
                                    {
                                        response.ResponseCode = Convert.ToInt16(TransactionStatus.BTCannotBeModified).ToString().PadLeft(2, '0');
                                    }
                                }
                                else
                                {
                                    if (oldTransaction.ProcessFlag.ToString().Equals("False") && !oldTransaction.ActionTaken.Equals("D"))
                                       response = Delete(transaction, oldTransaction.UserID);
                                    else
                                       response.ResponseCode = Convert.ToInt16(TransactionStatus.BTCannotBeModified).ToString().PadLeft(2, '0');
                                }

                            }
                            catch (Exception ex)
                            {
                                Utility.LogMessage("Error Occurred while update Balance Transfer: TransactionID-" + transaction.TransactionID + "-" + ex.Message.ToString());
                                transaction.ActionTaken = "F";
                                response.ResponseCode = Convert.ToInt16(TransactionStatus.UnexpectedError).ToString().PadLeft(2, '0');
                            }
                        }
                        else
                        {
                            response.ResponseCode = Convert.ToInt16(TransactionStatus.SecurityTokenInvalid).ToString().PadLeft(2, '0');
                        }
                    }
                    catch (Exception ex)
                    {
                        Utility.LogMessage("Error Occurred while update Balance Transfer: TransactionID-" + transaction.TransactionID + "-" + ex.Message.ToString());
                        response.ResponseCode = Convert.ToInt16(TransactionStatus.UnexpectedError).ToString().PadLeft(2, '0');
                    }
                }
                else
                {
                    response.ResponseCode = Convert.ToInt16(TransactionStatus.SecurityTokenInvalid).ToString().PadLeft(2, '0');
                }

            }

            return response;
        }

        public TransactionResponse Insert(Transaction transaction, string securityToken)
        {
            var response = new TransactionResponse();


            if (!string.IsNullOrEmpty(securityToken))
            {
                try
                {
                    UDIGenInq generalInquiry = new UDIGenInq();

                    if (!string.IsNullOrEmpty(transaction.AccountNoTransferTo))
                    {

                        TransferFromAccount fromAccount = GetTransferFromAccount(transaction.AccountNoTransferTo, securityToken);

                        transaction.FromAccount = fromAccount;

                        if (!string.IsNullOrEmpty(_connectionString)
                            && transaction != null && transaction.FromAccount != null
                            && !string.IsNullOrEmpty(transaction.AccountNoPayOff))
                        {
                            try
                            {
                                bool authorize = false;

                                string logMessage = "Transfer From Account "
                                    + Utility.MaskLoggingInfo(transaction.FromAccount.AccountNoTransferTo, 6, 6)
                                    + " To Account " + Utility.MaskLoggingInfo(transaction.AccountNoPayOff, 6, 6)
                                    + " for $" + transaction.Balance;

                                Utility.LogMessage("BT by user - " + transaction.UserID + logMessage);


                                //new transaction
                                authorize = true;
                                transaction.ActionTaken = "T";

                                //check for duplicate transaction
                                response.PossibleDuplicate = IsDuplicateTransaction(
                                    transaction.AccountNoTransferTo, transaction.AccountNoPayOff, transaction.Balance);


                                if (authorize)
                                {
                                    var authRequest = new AuthRequest()
                                    {
                                        AccountNoPayOff = transaction.AccountNoPayOff,
                                        AccountNoTransferTo = transaction.AccountNoTransferTo,
                                        AccountType = transaction.FromAccount.UDIResponse.Plastic1Type,
                                        Balance = transaction.Balance,
                                        CurrExpireDate = transaction.FromAccount.UDIResponse.CurrExpireDate,
                                        PostingIndicator = transaction.ProcessingType,
                                        SecurityToken = securityToken
                                    };

                                    var authResponse = Utility.Authorize(authRequest);

                                    if (authResponse != null && authResponse.AuthCode == "00")
                                    {
                                        response.ResponseCode = Convert.ToInt16(TransactionStatus.Success).ToString().PadLeft(2, '0');
                                    }
                                    else
                                    {
                                        transaction.ActionTaken = "F";
                                        response.ResponseCode = Convert.ToInt16(TransactionStatus.Declined).ToString().PadLeft(2, '0');
                                    }
                                }

                                // if after 7 pm add day
                                transaction.PostingDate = (DateTime.Now.Hour > 19)
                                    ? DateTime.Now.AddDays(1).ToShortDateString()
                                    : DateTime.Now.ToShortDateString();

                                response.TransactionID = InsertTransaction(transaction);

                                response.ResponseCode = Convert.ToInt16(TransactionStatus.Success).ToString().PadLeft(2, '0');

                            }
                            catch (Exception ex)
                            {
                                Utility.LogMessage("Error Occurred while new Balance Transfer: AccountNumber-" + transaction.AccountNoTransferTo + "-" + ex.Message.ToString());
                                transaction.ActionTaken = "F";
                                response.ResponseCode = Convert.ToInt16(TransactionStatus.UnexpectedError).ToString().PadLeft(2, '0');
                            }
                        }
                    }
                    else
                    {
                        response.ResponseCode = Convert.ToInt16(TransactionStatus.NoAccountFound).ToString().PadLeft(2, '0');
                    }
                }
                catch (Exception ex)
                {
                    Utility.LogMessage("Error Occurred while new Balance Transfer: AccountNumber-" + transaction.AccountNoTransferTo + "-" + ex.Message.ToString());
                    response.ResponseCode = Convert.ToInt16(TransactionStatus.UnexpectedError).ToString().PadLeft(2, '0');
                }
            }
            else
            {
                response.ResponseCode = Convert.ToInt16(TransactionStatus.SecurityTokenInvalid).ToString().PadLeft(2, '0');
            }

            return response;
        }

        public TransactionResponse GetSelectTransactions(string securityToken, string accountNo)
        {
            var response = new TransactionResponse();
           

             if (!string.IsNullOrEmpty(securityToken))
             {
                 try
                 {
                     UDIGenInq generalInquiry = new UDIGenInq();
                     if (generalInquiry.VerifySecurityToken(securityToken, accountNo))
                     {
                         var selectTransactions = new List<SelectTransactions>();

                         if (!string.IsNullOrEmpty(_connectionString))
                         {
                             using (var conn = new SqlConnection(_connectionString))
                             {
                                 try
                                 {
                                     conn.Open();

                                     var cmd = new SqlCommand("spSelectTransactionGrid", conn);
                                     cmd.Parameters.Clear();
                                     cmd.CommandType = CommandType.StoredProcedure;
                                     cmd.Parameters.Add("@AccountNoTransferTo", SqlDbType.VarChar).Value = accountNo;

                                     var dr = cmd.ExecuteReader();

                                     while (dr.Read())
                                     {
                                         selectTransactions.Add(new SelectTransactions()
                                         {
                                             CanEdit = dr.GetString(dr.GetOrdinal("Edit")) == "Edit" ? true : false,
                                             TransactionId = dr.GetInt32(dr.GetOrdinal("TransactionID")),
                                             AccountNoTransferTo = dr.GetString(dr.GetOrdinal("AccountNoTransferTo")),
                                             TransactionDate = dr.GetString(dr.GetOrdinal("TransactionDate")),
                                             AccountNoPayoff = dr.GetString(dr.GetOrdinal("AccountNoPayOff")),
                                             Balance = dr.GetDecimal(dr.GetOrdinal("Balance")),
                                             PayeeName = dr.GetString(dr.GetOrdinal("PayeeName")),
                                             Status = dr.GetString(dr.GetOrdinal("CurStatus")),
                                             ProcessDate = dr.GetString(dr.GetOrdinal("ProcessDate"))
                                         });
                                     }

                                     dr.Close();
                                     response.TransactionList = selectTransactions;
                                     response.ResponseCode = Convert.ToInt16(TransactionStatus.Success).ToString().PadLeft(2, '0');
                                 }
                                 catch (Exception ex)
                                 {
                                     Utility.LogMessage("Error in GetAllBTsForAccountNumber with Account Number " + accountNo + "-" + ex.Message.ToString());
                                     response.ResponseCode = Convert.ToInt16(TransactionStatus.UnexpectedError).ToString().PadLeft(2, '0');
                                 }
                                 finally
                                 {
                                     conn.Close();
                                 }
                             }
                         }
                     }
                     else
                     {
                         response.ResponseCode = Convert.ToInt16(TransactionStatus.SecurityTokenInvalid).ToString().PadLeft(2, '0') + " OR " + Convert.ToInt16(TransactionStatus.NoAccountFound).ToString().PadLeft(2, '0');
                     }
                 }
                 catch (Exception)
                 {
                     response.ResponseCode = Convert.ToInt16(TransactionStatus.SecurityTokenInvalid).ToString().PadLeft(2, '0');
                 }
             }
            else
            {
                response.ResponseCode = Convert.ToInt16(TransactionStatus.SecurityTokenInvalid).ToString().PadLeft(2, '0');
            }

             return response;
        }

        public TransactionResponse GetTransactionDetails(string securityToken, int transactionId)
        {
            var response = new TransactionResponse();
           

            Transaction transaction = null;
            if (!string.IsNullOrEmpty(securityToken))
            {
                try
                {
                    UDIGenInq generalInquiry = new UDIGenInq();
                    string accountNumber = string.Empty;
                    transaction = GetTransaction(transactionId);
                    if (generalInquiry.VerifySecurityToken(securityToken, transaction.AccountNoTransferTo))
                    {
                        response.TransactionObj = transaction;
                        response.ResponseCode = Convert.ToInt16(TransactionStatus.Success).ToString().PadLeft(2, '0');
                    }
                    else
                    {
                        response.ResponseCode = Convert.ToInt16(TransactionStatus.SecurityTokenInvalid).ToString().PadLeft(2, '0') + " OR " + Convert.ToInt16(TransactionStatus.NoAccountFound).ToString().PadLeft(2, '0');
                    }
                }
                catch (Exception ex)
                {
                    Utility.LogMessage("SecurityToken is empty for TransactionID :" + transactionId + "-" + ex.Message);
                    response.ResponseCode = Convert.ToInt16(TransactionStatus.UnexpectedError).ToString().PadLeft(2, '0');
                }
            }
            else
            {
                Utility.LogMessage("SecurityToken is empty for TransactionID :" + transactionId );
                response.ResponseCode = Convert.ToInt16(TransactionStatus.SecurityTokenInvalid).ToString().PadLeft(2, '0');
            }
            return response;
        }

        public Transaction GetTransaction(int transactionId)
        {
            Transaction transaction = null;           

            if (!string.IsNullOrEmpty(_connectionString))
            {
                using (var conn = new SqlConnection(_connectionString))
                {
                    try
                    {
                        conn.Open();
                        var cmd = new SqlCommand("spSelectTransactionForeZcard", conn);
                        cmd.CommandType = CommandType.StoredProcedure;                        
                        cmd.Parameters.Add("@TranID", SqlDbType.Int).Value = transactionId;
                        var dr = cmd.ExecuteReader();

                        while (dr.Read())
                        {
                            transaction = new Transaction() { FromAccount = new TransferFromAccount() };
                            transaction.AccountNoTransferTo = dr.GetString(dr.GetOrdinal("AccountNoTransferTo"));
                            transaction.TransactionID = dr.GetInt32(dr.GetOrdinal("TransactionID"));
                            transaction.UserID = dr.GetString(dr.GetOrdinal("UserID"));
                            transaction.TransactionDate = dr.GetDateTime(dr.GetOrdinal("TransactionDate")).ToShortDateString();
                            transaction.PostingDate = dr.GetDateTime(dr.GetOrdinal("PostingDate")).ToShortDateString();
                            transaction.ActionTaken = dr.GetString(dr.GetOrdinal("ActionTaken"));
                            transaction.ReturnReason = dr.GetString(dr.GetOrdinal("ReturnReason"));
                            transaction.PayeeName = dr.GetString(dr.GetOrdinal("PayeeName"));
                            transaction.PayeeAddress = dr.GetString(dr.GetOrdinal("PayeeAddress"));

                            if (!object.ReferenceEquals(dr.GetValue(dr.GetOrdinal("PayeeAddress2")), System.DBNull.Value))
                                transaction.PayeeAddress2 = dr.GetString(dr.GetOrdinal("PayeeAddress2"));

                            transaction.PayeeCity = dr.GetString(dr.GetOrdinal("PayeeCity"));
                            transaction.PayeeState = dr.GetString(dr.GetOrdinal("PayeeState"));
                            transaction.PayeeZip = dr.GetString(dr.GetOrdinal("PayeeZip"));

                            if (!object.ReferenceEquals(dr.GetValue(dr.GetOrdinal("PayeePhone")), System.DBNull.Value))
                                transaction.PayeePhone = dr.GetString(dr.GetOrdinal("PayeePhone"));

                            if (!object.ReferenceEquals(dr.GetValue(dr.GetOrdinal("TranDesc")), System.DBNull.Value))
                                transaction.TranDesc = dr.GetString(dr.GetOrdinal("TranDesc"));

                            transaction.CardTypeID = dr.GetInt16(dr.GetOrdinal("CardTypeID"));
                            transaction.AccountNoPayOff = dr.GetString(dr.GetOrdinal("AccountNoPayOff"));
                            transaction.Balance = dr.GetDecimal(dr.GetOrdinal("Balance"));
                            transaction.OldBalance = transaction.Balance;
                            transaction.ProcessFlag = dr.GetBoolean(dr.GetOrdinal("ProcessFlag"));

                            if (!object.ReferenceEquals(dr.GetValue(dr.GetOrdinal("AuthCode")), System.DBNull.Value))
                                transaction.AuthCode = dr.GetString(dr.GetOrdinal("AuthCode"));

                            if (!object.ReferenceEquals(dr.GetValue(dr.GetOrdinal("ApprovalCode")), System.DBNull.Value))
                                transaction.ApprovalCode = dr.GetString(dr.GetOrdinal("ApprovalCode"));

                            transaction.ProcessingType = dr.GetString(dr.GetOrdinal("PostingIndicator"));

                            if (!object.ReferenceEquals(dr.GetValue(dr.GetOrdinal("PromoCode")), System.DBNull.Value))
                                transaction.FromAccount.PromoCode = dr.GetString(dr.GetOrdinal("PromoCode"));

                            if (!object.ReferenceEquals(dr.GetValue(dr.GetOrdinal("PaymentIssueDate")), System.DBNull.Value))
                                transaction.PaymentIssueDate = dr.GetDateTime(dr.GetOrdinal("PaymentIssueDate")).ToShortDateString();

                            if (!object.ReferenceEquals(dr.GetValue(dr.GetOrdinal("ReturnDate")), System.DBNull.Value))
                                transaction.ReturnDate = dr.GetDateTime(dr.GetOrdinal("ReturnDate")).ToShortDateString();

                            if (!object.ReferenceEquals(dr.GetValue(dr.GetOrdinal("ProcessDate")), System.DBNull.Value))
                                transaction.ProcessDate = dr.GetDateTime(dr.GetOrdinal("ProcessDate")).ToShortDateString();
                        }
                        dr.Close();
                    }
                    catch (Exception ex)
                    {
                        Utility.LogMessage("Error in GetTransaction: TransactionID-" + transactionId + "-" + ex.Message.ToString());
                        throw (new Exception("Error in GetTransaction: " + ex.ToString()));
                    }
                    finally
                    {
                        conn.Close();
                    }
                }
            }
            return transaction;
        }

        private bool IsDuplicateTransaction(string accountNumber, string fromAccount, decimal amount)
        {
            bool result = false;

            if (!string.IsNullOrEmpty(_connectionString))
            {
                using (var conn = new SqlConnection(_connectionString))
                {
                    try
                    {
                        conn.Open();
                        var cmd = new SqlCommand("sptbTransactions_select_duplicate", conn);
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("@AccountNoTransferTo", SqlDbType.VarChar, 16).Value = accountNumber;
                        cmd.Parameters.Add("@AccountNoPayOff", SqlDbType.VarChar, 16).Value = fromAccount;
                        cmd.Parameters.Add("@Balance", SqlDbType.SmallMoney).Value = amount;
                        var dr = cmd.ExecuteReader();
                        result = dr.Read();
                    }
                    catch (Exception ex)
                    {
                        Utility.LogMessage("Error in PossibleDuplicate: AccountNumber-" + accountNumber + "-" + ex.Message.ToString());
                    }
                    finally
                    {
                        conn.Close();
                    }
                }
            }

            return result;
        }

        private int InsertTransaction(Transaction transaction)
        {
            if (!string.IsNullOrEmpty(_connectionString)
                && transaction != null
                && transaction.FromAccount != null
                && transaction.FromAccount.UDIResponse != null)
            {
                var fromAccount = transaction.FromAccount;
                var udiResponse = transaction.FromAccount.UDIResponse;

                var connString = Utility.GetConnectionString();
                using (var conn = new SqlConnection(connString))
                {
                    try
                    {
                        conn.Open();
                        var cmd = new SqlCommand("spUpdateTranData", conn);
                        cmd.CommandType = CommandType.StoredProcedure;

                        //to card info
                        cmd.Parameters.Add("@AccountNoTransferTo", SqlDbType.VarChar).Value = transaction.AccountNoTransferTo;
                        cmd.Parameters.Add("@CorpID", SqlDbType.VarChar).Value = fromAccount.CorpID ?? string.Empty;
                        cmd.Parameters.Add("@InstID", SqlDbType.VarChar).Value = fromAccount.InstID ?? string.Empty;
                        cmd.Parameters.Add("@InstName", SqlDbType.VarChar).Value = fromAccount.InstName ?? string.Empty;
                        cmd.Parameters.Add("@MainBankID", SqlDbType.VarChar).Value = fromAccount.MainBankID ?? string.Empty;
                        cmd.Parameters.Add("@HostSystem", SqlDbType.VarChar).Value = fromAccount.HostSystem ?? string.Empty;
                        cmd.Parameters.Add("@AssociationID", SqlDbType.VarChar).Value = fromAccount.AssociationID ?? string.Empty;
                        cmd.Parameters.Add("@ProdSub", SqlDbType.VarChar).Value = fromAccount.ProdSub ?? string.Empty;
                        cmd.Parameters.Add("@CardHolderName", SqlDbType.VarChar).Value = fromAccount.CardHolderName ?? string.Empty;
                        cmd.Parameters.Add("@CardHolderAddress1", SqlDbType.VarChar).Value = fromAccount.CardHolderAddress1 ?? string.Empty;
                        cmd.Parameters.Add("@CardHolderAddress2", SqlDbType.VarChar).Value = fromAccount.CardHolderAddress2 ?? string.Empty;
                        cmd.Parameters.Add("@CardHolderAddress3", SqlDbType.VarChar).Value = fromAccount.CardHolderAddress3 ?? string.Empty;
                        cmd.Parameters.Add("@CardHolderCity", SqlDbType.VarChar).Value = fromAccount.CardHolderCity ?? string.Empty; ;
                        cmd.Parameters.Add("@CardHolderState", SqlDbType.VarChar).Value = fromAccount.CardHolderState ?? string.Empty;
                        cmd.Parameters.Add("@CardHolderZip", SqlDbType.VarChar).Value = fromAccount.CardHolderZip ?? string.Empty; ;
                        cmd.Parameters.Add("@CardHolderPhone", SqlDbType.VarChar).Value = fromAccount.CardHolderPhone ?? string.Empty;

                        //from card info
                        cmd.Parameters.Add("@TransactionID", SqlDbType.Int).Value = transaction.TransactionID;
                        cmd.Parameters.Add("@UserID", SqlDbType.VarChar).Value = transaction.UserID;
                        cmd.Parameters.Add("@TransactionDate", SqlDbType.DateTime).Value = DateTime.Now;
                        cmd.Parameters.Add("@PostingDate", SqlDbType.SmallDateTime).Value = transaction.PostingDate;
                        cmd.Parameters.Add("@ActionTaken", SqlDbType.VarChar).Value = transaction.ActionTaken;
                        cmd.Parameters.Add("@PayeeName", SqlDbType.VarChar).Value = transaction.PayeeName.ToUpper();
                        cmd.Parameters.Add("@PayeeAddress", SqlDbType.VarChar).Value = transaction.PayeeAddress.ToUpper();
                        cmd.Parameters.Add("@PayeeAddress2", SqlDbType.VarChar).Value =
                            !string.IsNullOrEmpty(transaction.PayeeAddress2) ? transaction.PayeeAddress2.ToUpper() : string.Empty;
                        cmd.Parameters.Add("@PayeeCity", SqlDbType.VarChar).Value = transaction.PayeeCity.ToUpper();
                        cmd.Parameters.Add("@PayeeState", SqlDbType.VarChar).Value = transaction.PayeeState.ToUpper();
                        cmd.Parameters.Add("@PayeeZip", SqlDbType.VarChar).Value = transaction.PayeeZip;
                        cmd.Parameters.Add("@PayeePhone", SqlDbType.VarChar).Value =
                            !string.IsNullOrEmpty(transaction.PayeePhone) ? transaction.PayeePhone.Replace("-", "") : string.Empty;
                        cmd.Parameters.Add("@TranDesc", SqlDbType.VarChar).Value =
                            !string.IsNullOrEmpty(transaction.TranDesc) ? transaction.TranDesc.ToUpper() : string.Empty;
                        cmd.Parameters.Add("@CardTypeId", SqlDbType.SmallInt).Value = transaction.CardTypeID;
                        cmd.Parameters.Add("@AccountNoPayOff", SqlDbType.VarChar).Value = transaction.AccountNoPayOff;
                        cmd.Parameters.Add("@Balance", SqlDbType.SmallMoney).Value = transaction.Balance;
                        cmd.Parameters.Add("@PostingIndicator", SqlDbType.VarChar).Value = transaction.ProcessingType; // transaction.FromAccount.PostingIndicator.ToUpper();
                        cmd.Parameters.Add("@PromoCode", SqlDbType.VarChar).Value =
                            !string.IsNullOrEmpty(transaction.Promocode) ? transaction.Promocode.ToUpper() : string.Empty;

                        //Authorization Info
                        cmd.Parameters.Add("@AuthCode", SqlDbType.VarChar).Value =
                            (!string.IsNullOrEmpty(transaction.AuthCode)) ? transaction.AuthCode.ToUpper() : string.Empty;
                        cmd.Parameters.Add("@ApprovalCode", SqlDbType.VarChar).Value =
                            (!string.IsNullOrEmpty(transaction.ApprovalCode)) ? transaction.ApprovalCode.ToUpper() : string.Empty;

                        cmd.Parameters.Add("@MemoDesc", SqlDbType.VarChar).Value = string.Empty;
                        cmd.Parameters.Add("@BTProcessDate", SqlDbType.SmallDateTime).Value = System.DBNull.Value;
                        cmd.Parameters.Add("@ProcessDate", SqlDbType.SmallDateTime).Value = System.DBNull.Value;

                        return (int)cmd.ExecuteScalar();
                    }
                    catch (Exception ex)
                    {
                        Utility.LogMessage("Error Occurred while Inserting Transaction: AccountNumber -" + transaction.AccountNoTransferTo + "-" + ex.Message.ToString());
                        throw ex;
                    }
                    finally
                    {
                        conn.Close();
                    }
                }
            }

            return 0;
        }

        private int UpdateTransaction(Transaction transaction)
        {
            if (!string.IsNullOrEmpty(_connectionString)
                && transaction != null)
            {
                var connString = Utility.GetConnectionString();
                using (var conn = new SqlConnection(connString))
                {
                    try
                    {
                        conn.Open();
                        var cmd = new SqlCommand("spUpdateTransactionsForezcard", conn);
                        cmd.CommandType = CommandType.StoredProcedure;                       
                       
                        cmd.Parameters.Add("@TransactionID", SqlDbType.Int).Value = transaction.TransactionID;                       
                        cmd.Parameters.Add("@CardTypeId", SqlDbType.SmallInt).Value = transaction.CardTypeID;
                        cmd.Parameters.Add("@AccountNoPayOff", SqlDbType.VarChar).Value = transaction.AccountNoPayOff ?? string.Empty;
                       
                        if (transaction.Balance > 0)
                        {
                            cmd.Parameters.Add("@PostingIndicator", SqlDbType.VarChar).Value = transaction.ProcessingType ?? string.Empty;
                            cmd.Parameters.Add("@PromoCode", SqlDbType.VarChar).Value = transaction.Promocode ?? string.Empty;                               
                        }
                        else
                        {
                            cmd.Parameters.Add("@PostingIndicator", SqlDbType.VarChar).Value = string.Empty;
                            cmd.Parameters.Add("@PromoCode", SqlDbType.VarChar).Value = string.Empty;
                        }
                        
                        cmd.Parameters.Add("@PayeeName", SqlDbType.VarChar).Value =
                            !string.IsNullOrEmpty(transaction.PayeePhone) ? transaction.PayeePhone : string.Empty;
                        cmd.Parameters.Add("@PayeeAddress1", SqlDbType.VarChar).Value =
                            !string.IsNullOrEmpty(transaction.PayeeAddress) ? transaction.PayeeAddress : string.Empty;
                        cmd.Parameters.Add("@PayeeAddress2", SqlDbType.VarChar).Value =
                            !string.IsNullOrEmpty(transaction.PayeeAddress2) ? transaction.PayeeAddress2 : string.Empty;
                        cmd.Parameters.Add("@PayeeCity", SqlDbType.VarChar).Value =
                            !string.IsNullOrEmpty(transaction.PayeeCity) ? transaction.PayeeCity : string.Empty;
                        cmd.Parameters.Add("@PayeeState", SqlDbType.VarChar).Value =
                            !string.IsNullOrEmpty(transaction.PayeeState) ? transaction.PayeeState : string.Empty;
                        cmd.Parameters.Add("@PayeeZip", SqlDbType.VarChar).Value =
                            !string.IsNullOrEmpty(transaction.PayeeZip) ? transaction.PayeeZip : string.Empty;
                       
                        cmd.Parameters.Add("@PayeePhone", SqlDbType.VarChar).Value =
                            !string.IsNullOrEmpty(transaction.PayeePhone) ? transaction.PayeePhone.Replace("-", "") : string.Empty;
                        cmd.Parameters.Add("@TransactionDesc", SqlDbType.VarChar).Value =
                            !string.IsNullOrEmpty(transaction.TranDesc) ? transaction.TranDesc : string.Empty;
                        
                        cmd.Parameters.Add("@Balance", SqlDbType.SmallMoney).Value = transaction.Balance;
                        cmd.Parameters.Add("@ActionTaken", SqlDbType.VarChar).Value =
                            !string.IsNullOrEmpty(transaction.ActionTaken) ? transaction.ActionTaken : string.Empty;
                        cmd.Parameters.Add("@UserID", SqlDbType.VarChar).Value =
                            !string.IsNullOrEmpty(transaction.UserID) ? transaction.UserID : string.Empty;
                        
                        return (int)cmd.ExecuteScalar();
                    }
                    catch (Exception ex)
                    {
                        Utility.LogMessage("Error Occurred while Updating TransactionId: " + transaction.TransactionID + "-" + ex.Message.ToString());                       
                        throw ex;
                    }
                    finally
                    {
                        conn.Close();
                    }
                }
            }

            return 0;
        }

        public TransferFromAccount GetTransferFromAccount(string accountNumber, string securityToken)
        {
            TransferFromAccount fromAccount = null;           
            if (!string.IsNullOrEmpty(accountNumber))
            {             
                              
               // Utility.LogMessage("INQ by user - " + userName + " - on Account No - "
                //    + Utility.MaskLoggingInfo(accountNumber, 6, 6));
                
                UDIGenInq generalInquiry = new UDIGenInq();
                generalInquiry.ProcessByAcct(securityToken, accountNumber);

                
                UDIBinInfo binInfo = new UDIBinInfo();
                binInfo.LookupInfoByAccountNumber(accountNumber);

                if (string.IsNullOrEmpty(generalInquiry.Message.Trim()))
                {
                    fromAccount = new TransferFromAccount()
                    {
                        AccountNoTransferTo = accountNumber,
                        CorpID = generalInquiry.Corp.PadLeft(6, Convert.ToChar("0")),
                        InstID = generalInquiry.InstID,
                        InstName = string.IsNullOrEmpty(generalInquiry.InstName.Trim()) ? binInfo.InstName : generalInquiry.InstName,
                        ProdSub = generalInquiry.Product,
                        HostSystem = binInfo.HostSystem.ToUpper(),
                        AssociationID = binInfo.Association,
                        CardHolderAddress1 = generalInquiry.Address1,
                        CardHolderAddress2 = generalInquiry.Address2,
                        CardHolderAddress3 = generalInquiry.Address3,
                        CardHolderCity = generalInquiry.City,
                        CardHolderState = generalInquiry.State,
                        CardHolderZip = generalInquiry.Zip,
                        CardHolderPhone = generalInquiry.HomePhone,                       

                        UDIResponse = new UDIResponse()
                        {

                            Plastic1Type = generalInquiry.Plastic1Type,
                            TypeOfCard = generalInquiry.CommercialCard,
                            Name1 = generalInquiry.Name1.Trim(),
                            Name2 = generalInquiry.Name2.Trim(),
                            Name3 = generalInquiry.Name3.Trim(),
                            Name4 = generalInquiry.Name4.Trim(),
                            BinOwner = binInfo.BinOwner,
                            BlockCode = !string.IsNullOrEmpty(generalInquiry.BlockCode) && generalInquiry.BlockCode.Length == 0 ? "_" : generalInquiry.BlockCode,
                            ReclassCode = !string.IsNullOrEmpty(generalInquiry.ReclassCode) && generalInquiry.ReclassCode.Length == 0 ? "_" : generalInquiry.ReclassCode,
                            Embossing = generalInquiry.EmbossingLine4,
                            AvailableAmount = generalInquiry.AvailableAmount.FormatCurrency(),
                            AvailableCash = generalInquiry.AvailableCashAmount.FormatCurrency(),
                            CardActivationStatus = generalInquiry.CardActvStatus,
                            PreviousAccount = generalInquiry.CrossRefNo,
                        },
                    };

                    if (fromAccount.UDIResponse.TypeOfCard == "50" || fromAccount.UDIResponse.TypeOfCard == "51" || string.IsNullOrEmpty(fromAccount.UDIResponse.Name1.Trim()))
                        fromAccount.CardHolderName = fromAccount.UDIResponse.Name2;
                    else
                        fromAccount.CardHolderName = fromAccount.UDIResponse.Name1;

                    if (fromAccount.HostSystem == "FS" || fromAccount.HostSystem == "FM")
                    {
                        //tbs
                        if (generalInquiry.CurrExpireDate.Length >= 6)
                            fromAccount.UDIResponse.CurrExpireDate = generalInquiry.CurrExpireDate.Substring(4, 2)
                                + generalInquiry.CurrExpireDate.Substring(2, 2);
                        else
                            fromAccount.UDIResponse.CurrExpireDate = generalInquiry.CurrExpireDate.Substring(2, 2)
                                + generalInquiry.CurrExpireDate.Substring(0, 2);
                    }
                    else
                    {
                        //b2k
                        fromAccount.UDIResponse.CurrExpireDate = generalInquiry.CurrExpireDate;
                    }
                }
            }

            return fromAccount;
        }

        public string GetSecurityToken(string UserName, string Password)
        {
            string result = string.Empty;            

            using (var udiLogon = new UDILogOn())
            {
                udiLogon.LogOn(UserName, Password);

                if (udiLogon.B2K_ResponseCode == "00" || udiLogon.TBSM_ResponseCode == "00" || udiLogon.TBSS_ResponseCode == "00")
                {
                    try
                    {                        
                       result = udiLogon.SecurityToken;                       
                    }
                    catch (Exception ex)
                    {
                        Utility.LogMessage("Error Occurred while Login: " + ex.Message.ToString());
                        throw ex;
                    }
                }
            }

            return result;
        }

    }
}