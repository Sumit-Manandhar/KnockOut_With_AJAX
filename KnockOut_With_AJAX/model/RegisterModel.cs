using System;
using System.Collections.Generic;
using System.Linq;
using System.Web;

namespace KnockOut_With_AJAX.model
{
    public class RegisterModel
    {

        public int ID { get; set; }
        public string FullName { get; set; }
        public string Address { get; set; }
        public string Email { get; set; }
        public string Phone { get; set; }
        public string GenderName { get; set; }
        public int GenderID { get; set; }
        public DateTime DOB { get; set; } 
    }
}