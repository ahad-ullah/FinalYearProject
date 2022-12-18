using LeftoverManagementApi.Halpers;
using LeftoverManagementApi.Helpers;
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
        public IActionResult RegisterUser(string email, string userName, string password)
        {
            ICryptoGraphy cryptoEngin = new CryptoEngine();
            IEmailService emailSender = new EmailSender();
            try
            {
                if (_context.LeftoverManagement_Users.Any(x => x.Email == email))
                {
                    //here we will return something that will tell react app that this email already exists in the db
                    return BadRequest("Username Already Exist");
                }
                var pass = cryptoEngin.Encrypt(password, cryptoEngin.key);
                LeftoverManagement_Users user = new LeftoverManagement_Users() { Email = email, UserName = userName, Passowrd = pass };
                _context.LeftoverManagement_Users.Add(user);
                _context.SaveChanges();
            }
            catch (Exception e)
            {

                return BadRequest(e.Message);
            }
            try
            {
                string token = EmailSender.CreateToken();
                string verificationLink = @"https://localhost:7195/api/Signup?token=replaceToken".Replace("replaceToken", token);
                emailSender.SendEmail("umaimafaisal700@gmail.com", emailSender.CreateEmail(verificationLink));
            }
            catch (Exception e)
            {
                return StatusCode(500,e.Message);
            }

            return Ok();
        }
        [HttpGet]
        public IActionResult VarifyEmail(string token)
        {
            return Ok("Verified");
        }
       
    }
}
