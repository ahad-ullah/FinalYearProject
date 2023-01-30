using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace LeftoverManagementApi.Halpers
{
    interface ICryptoGraphy
    {

        string Encrypt(string input, string key);
        string Decrypt(string input, string key);
        string key
        {
            get;
            set;
        }
    }
}
