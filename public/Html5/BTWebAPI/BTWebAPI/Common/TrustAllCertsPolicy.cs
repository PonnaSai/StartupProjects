﻿using System;
using System.Collections.Generic;
using System.Linq;
using System.Net.Security;
using System.Security.Cryptography.X509Certificates;
using System.Web;

namespace BTWebAPI.Common
{
    public class TrustAllCertsPolicy
    {
        //This class handles problems with certificates if ssl (https) is used
        public static bool ValidateCertificate(object sender, X509Certificate certificate, X509Chain chain, SslPolicyErrors sslPolicyErrors)
        {
            //always return true, we are not checking certs yet
            return true;
        }
    }
}