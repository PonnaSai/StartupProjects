using BalanceTransfer.Common;
using BalanceTransfer.Enumerations;
using BalanceTransfer.Models;
using BalanceTransfer.ViewModel;
using System;
using System.Collections.Generic;
using System.Collections.Specialized;
using System.Configuration;
using System.Data;
using System.Data.SqlClient;
using System.Linq;
using System.Net;
using System.Net.Security;
using System.Text;
using System.Web;
using System.Xml;

namespace BalanceTransfer.Repositories
{
    public class TransactionsRepository
    {
        private string _connectionString = null;

        public TransactionsRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public TransactionResponse Delete(Transaction transaction, string userName)
        {
            var transactionResponse = new TransactionResponse()
            {
                TransactionStatus = TransactionStatus.Error,
                ResponseMessage = "Unknown Error, Contact Appropriate Parties."
            };

            if (!string.IsNullOrEmpty(_connectionString) && transaction != null)
            {
                transactionResponse.TransactionID = transaction.TransactionID;

                Utility.LogMessage("Delete by user - "
                    + userName + " - on Account No - "
                    + Utility.MaskLoggingInfo(transaction.AccountNoPayOff, 6, 6));

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
                            transactionResponse.TransactionStatus = TransactionStatus.Deleted;
                    }
                    catch (Exception ex)
                    {
                        Utility.LogMessage("BT Delete Error - " + ex.ToString());
                        transactionResponse.ResponseMessage = "Error Occurred while Deleting Balance Transfer.  Contact Appropriate Parties.";
                    }
                    finally
                    {
                        conn.Close();
                    }
                }
            }

            return transactionResponse;
        }

        public int GetCount(string accountNumber)
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
                        return Convert.ToInt32(cmd.ExecuteScalar());
                    }
                    catch (Exception ex)
                    {
                        Utility.LogMessage("GetTransactionsCount Error - " + ex.ToString());
                    }
                    finally
                    {
                        conn.Close();
                    }
                }
            }

            return 0;
        }

        public TransactionResponse InsertOrUpdate(Transaction transaction, string userName, string securityToken)
        {
            var response = new TransactionResponse()
            {
                TransactionStatus = TransactionStatus.Error,
                ResponseMessage = "Error Occurred while Processing Transaction. Contact Appropriate Parties."
            };

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

                    Utility.LogMessage("BT by user - " + userName + logMessage);

                    if (transaction.TransactionID != 0)
                    {
                        //updating the transaction
                        if (transaction.Forced)
                        {
                            transaction.ActionTaken = "O";
                            response.TransactionStatus = TransactionStatus.Forced;
                        }
                        else
                        {
                            response.TransactionStatus = TransactionStatus.Updated;

                            //we never authorize overridden transactions
                            if (transaction.ActionTaken != "O")
                            {
                                transaction.ActionTaken = "E";

                                //always authorize if amount is changed
                                authorize = (transaction.OldBalance != transaction.Balance);
                            }
                        }
                    }
                    else
                    {
                        //new transaction
                        authorize = true;
                        transaction.ActionTaken = "T";

                        //check for duplicate transaction
                        response.IsDuplicate = IsDuplicateTransaction(
                            transaction.FromAccount.AccountNoTransferTo, transaction.AccountNoPayOff, transaction.Balance);
                    }

                    if (authorize)
                    {
                        var authRequest = new AuthRequest()
                        {
                            AccountNoPayOff = transaction.AccountNoPayOff,
                            AccountNoTransferTo = transaction.FromAccount.AccountNoTransferTo,
                            AccountType = transaction.FromAccount.UDIResponse.Plastic1Type,
                            Balance = transaction.Balance,
                            CurrExpireDate = transaction.FromAccount.UDIResponse.CurrExpireDate,
                            PostingIndicator = transaction.FromAccount.PostingIndicator,
                            SecurityToken = securityToken
                        };

                        var authResponse = Utility.Authorize(authRequest);

                        if (authResponse != null && authResponse.AuthCode == "00")
                        {
                            response.TransactionStatus = TransactionStatus.Approved;
                        }
                        else
                        {
                            transaction.ActionTaken = "F";
                            response.TransactionStatus = TransactionStatus.Declined;
                        }
                    }

                    // if after 7 pm add day
                    transaction.PostingDate = (DateTime.Now.Hour > 19)
                        ? DateTime.Now.AddDays(1).ToShortDateString()
                        : DateTime.Now.ToShortDateString();

                    transaction.UserID = userName.ToUpper();

                    //rest of the response fields
                    response.TransactionID = InsertOrUpdateTransaction(transaction);
                    response.ResponseMessage = string.Empty;
                }
                catch (Exception ex)
                {
                    Utility.LogMessage("Error Occurred while Processing Balance Transfer: " + ex.Message.ToString());
                    transaction.ActionTaken = "F";
                }
            }

            return response;
        }

        public IEnumerable<SelectTransactions> GetSelectTransactions(string accountNo)
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

                    }
                    catch (Exception ex)
                    {
                        Utility.LogMessage("Error in GetSelectTransactions: " + ex.Message.ToString());
                    }
                    finally
                    {
                        conn.Close();
                    }
                }
            }

            return selectTransactions;
        }

        public Transaction GetTransaction(string accountNumber, int? transactionId)
        {
            Transaction transaction = null;

            if (!string.IsNullOrEmpty(_connectionString))
            {
                using (var conn = new SqlConnection(_connectionString))
                {
                    try
                    {
                        conn.Open();
                        var cmd = new SqlCommand("spSelectTransaction", conn);
                        cmd.CommandType = CommandType.StoredProcedure;
                        cmd.Parameters.Add("@AccountNoTransferTo", SqlDbType.VarChar).Value = accountNumber ?? string.Empty;
                        cmd.Parameters.Add("@TranID", SqlDbType.Int).Value = transactionId ?? 0;

                        var dr = cmd.ExecuteReader();

                        while (dr.Read())
                        {
                            transaction = new Transaction() { FromAccount = new TransferFromAccount() };

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

                            transaction.FromAccount.PostingIndicator = dr.GetString(dr.GetOrdinal("PostingIndicator"));

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

                        return transaction;
                    }
                    catch (Exception ex)
                    {
                        Utility.LogMessage("Error in GetTransaction: " + ex.Message.ToString());
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
                        Utility.LogMessage("Error in PossibleDuplicate: " + ex.Message.ToString());
                    }
                    finally
                    {
                        conn.Close();
                    }
                }
            }

            return result;
        }

        private int InsertOrUpdateTransaction(Transaction transaction)
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
                        cmd.Parameters.Add("@AccountNoTransferTo", SqlDbType.VarChar).Value = fromAccount.AccountNoTransferTo;
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
                        cmd.Parameters.Add("@PostingIndicator", SqlDbType.VarChar).Value = transaction.FromAccount.PostingIndicator.ToUpper();
                        cmd.Parameters.Add("@PromoCode", SqlDbType.VarChar).Value =
                            !string.IsNullOrEmpty(transaction.FromAccount.PromoCode) ? transaction.FromAccount.PromoCode.ToUpper() : string.Empty;

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
                        Utility.LogMessage("Error Occurred while Inserting/Updating Transaction: " + ex.Message.ToString());
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
    }
}