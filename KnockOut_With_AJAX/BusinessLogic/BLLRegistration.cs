using KnockOut_With_AJAX.model;
using System;
using System.Collections.Generic;
using System.Configuration;
using System.Data.SqlClient;
using System.Linq;
using System.Web;

namespace KnockOut_With_AJAX.BusinessLogic
{
    public class BLLRegistration
    {
        static string connectionStr = ConfigurationManager.ConnectionStrings["info_practice"].ConnectionString;
        public int Register(RegisterModel user)
        {
            using (SqlConnection conn = new SqlConnection(connectionStr))
            {

                conn.Open();
                using (SqlCommand cmd = new SqlCommand())
                {
                    cmd.Connection = conn;
                    cmd.CommandText = "demoRegister";
                    cmd.CommandType = System.Data.CommandType.StoredProcedure;

                    SqlParameter[] param = new SqlParameter[]

                    {
                        new SqlParameter("@ID", user.ID ),
                        new SqlParameter("@FullName", user.FullName),
                        new SqlParameter("@GenderID", user.GenderID),
                        new SqlParameter("@GenderName", user.GenderName),
                        
                        new SqlParameter("@Email", user.Email),
                        new SqlParameter("@Phone", user.Phone),
                        new SqlParameter("@Address", user.Address),
                        new SqlParameter("@DOB", user.DOB)

                    };
                    cmd.Parameters.AddRange(param);

                    int res = cmd.ExecuteNonQuery();
                    return res;
                }
            }
        }

        public List<RegisterModel> GetRegisters()
        {
            using (SqlConnection conn = new SqlConnection(connectionStr))
            {
                List<RegisterModel> users = new List<RegisterModel>();
                conn.Open();
                using (SqlCommand cmd = new SqlCommand())
                {
                    cmd.Connection = conn;
                    cmd.CommandText = "select * from demo";
                    cmd.CommandType = System.Data.CommandType.Text;

                    SqlDataReader reader = cmd.ExecuteReader();
                    if (reader.HasRows)
                    {
                        while (reader.Read())
                        {
                            RegisterModel user = new RegisterModel();
                            user.ID = Convert.ToInt32(reader["ID"]);

                            user.FullName = reader["FullName"].ToString();
                            user.GenderName = reader["GenderName"].ToString();
                            user.Phone = reader["Phone"].ToString();
                            user.Address = reader["Address"].ToString();
                            user.GenderID = Convert.ToInt32(reader["GenderID"]);
                            user.DOB = Convert.ToDateTime(reader["DOB"]);
                           
                            user.Email = reader["Email"].ToString();
                          



                            users.Add(user);
                        }

                    }

                    return users;


                }

            }
        }
    }
}