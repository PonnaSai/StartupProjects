using BalanceTransfer.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace BalanceTransfer.Repositories
{
    public class CardTypesRepository
    {
        private string _connectionString = null;

        public CardTypesRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public IEnumerable<CardType> Get()
        {
            IList<CardType> cardTypes = new List<CardType>();

            using (var conn = new SqlConnection(_connectionString))
            {
                try
                {
                    conn.Open();

#if UAT
                    var cmd = new SqlCommand("[BalTrans].spSelectCardTypeCombo", conn);
#else
                    var cmd = new SqlCommand("spSelectCardTypeCombo", conn);
#endif
                    var dr = cmd.ExecuteReader();
                    while (dr.Read())
                    {
                        cardTypes.Add(new CardType()
                        {
                            Key = dr.GetInt16(0),
                            Value = dr.GetString(1)
                        });
                    }

                    dr.Close();
                }
                catch (Exception ex)
                {
                    Utility.LogMessage("Error in GetCardTypes: " + ex.Message.ToString());
                }
                finally
                {
                    conn.Close();
                }
            }

            return cardTypes;
        }
    }
}