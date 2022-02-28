using KnockOut_With_AJAX.BusinessLogic;
using KnockOut_With_AJAX.model;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Net.Http;
using System.Web.Http;

namespace KnockOut_With_AJAX.controller
{
    public class RegistrationController : ApiController
    {
        // GET api/<controller>

        [Route("api/registration/getData")]
        [AcceptVerbs("GET")]
        public List<RegisterModel> getData()
        {
            BLLRegistration rg = new BLLRegistration();
            return rg.GetRegisters();
        }

        [Route("api/Registration/insert")]
        [AcceptVerbs("POST")]

        public object insert(RegisterModel entity)
        {
            BLLRegistration rg = new BLLRegistration();
             
            return rg.Register(entity); 
        }

        // GET api/<controller>/5
        

        // POST api/<controller>
       
    }
}