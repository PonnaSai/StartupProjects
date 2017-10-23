using BalanceTransfer.Models;
using System;
using System.Collections.Generic;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace BalanceTransfer.Repositories
{
    public class StatesRepository
    {
        private string _connectionString = null;

        public StatesRepository(string connectionString)
        {
            _connectionString = connectionString;
        }

        public IEnumerable<State> Get()
        {
            IList<State> states = new List<State>();

            using (var conn = new SqlConnection(_connectionString))
            {
                try
                {
                    conn.Open();
#if UAT
                    var cmd = new SqlCommand("[BalTrans].spSelectStateCombo", conn);
#else
                    var cmd = new SqlCommand("spSelectStateCombo", conn);
#endif
                    var dr = cmd.ExecuteReader();
                    while (dr.Read())
                    {
                        states.Add(new State()
                        {
                            Key = dr.GetString(1),
                            Value = dr.GetString(0)
                        });
                    }

                    dr.Close();
                }
                catch (Exception ex)
                {
                    Utility.LogMessage("Error in GetStates: " + ex.Message.ToString());
                }
                finally
                {
                    conn.Close();
                }
            }

            return states;
        }
    }
}