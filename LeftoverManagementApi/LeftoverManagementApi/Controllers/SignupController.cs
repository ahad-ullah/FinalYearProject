using LeftoverManagementApi.Halpers;
using LeftoverManagementApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Diagnostics.Eventing.Reader;
using System.Linq;
using System.Security.Cryptography;

namespace LeftoverManagementApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SignupController : ControllerBase
    {
        private ApplicationDbContext _context;
        public SignupController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        [Route("RegisterUser")]
        public string RegisterUser([FromBody] LeftoverManagement_Users leftoverUser)
        {
            ICryptoGraphy cryptoEngin = new CryptoEngine();
            IEmailService emailSender = new EmailSender();
            try
            {
                if (_context.LeftoverManagement_Users.Any(x => x.Email == leftoverUser.Email))
                {
                    //here we will return something that will tell react app that this email already exists in the db
                    return "User Already Exits";
                }
                var pass = cryptoEngin.Encrypt(leftoverUser.Passowrd, cryptoEngin.key);
                string token = EmailSender.CreateToken();
                leftoverUser.Passowrd = pass;
                leftoverUser.VarificationToken = token;
                leftoverUser.TokenTime = DateTime.UtcNow.AddMinutes(20);
                string verificationLink = @"https://localhost:7195/api/Signup?token=replaceToken".Replace("replaceToken", token);
                emailSender.SendEmail("gonfreecss891@gmail.com", emailSender.CreateEmail(verificationLink));
                _context.LeftoverManagement_Users.Add(leftoverUser);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                return e.Message;
            }

            return "Data Saved.";
        }
        [HttpGet]
        public string VarifyEmail(string token)
        {
            try
            {
                if (_context.LeftoverManagement_Users.Any(x => x.VarificationToken == token))
                {

                    var user = _context.LeftoverManagement_Users.Where(x => x.VarificationToken == token).FirstOrDefault();
                    if (user!=null && user.TokenTime <= DateTime.UtcNow)
                    {
                        user.EmailVarification = true;
                        user.VarificationToken = "";
                        _context.LeftoverManagement_Users.Update(user);
                        return "Email verified";
                    }
                    return "Token Expired";
                }
                return "Token Not Valid";
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
    }

}
