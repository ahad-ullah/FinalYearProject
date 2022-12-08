using LeftoverManagementApi.Halpers;
using LeftoverManagementApi.Helpers;
using LeftoverManagementApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Linq;

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
            //IEmailService emailSender = new EmailSender();
            if (_context.LeftoverManagement_Users.Any(x=>x.Email==email))
            {
                //here we will return something that will tell react app that this email already exists in the db
                return BadRequest();
            }
            var pass = cryptoEngin.Encrypt(password, cryptoEngin.key);
            LeftoverManagement_Users user = new LeftoverManagement_Users() { Email = email,UserName= userName,Passowrd=pass};
            _context.LeftoverManagement_Users.Add(user);
            _context.SaveChanges();
            //emailSender.SendEmail("ahadullahkhokhar@gmail.com",emailSender.CreateEmail("12"));
            
            return Ok(cryptoEngin.Decrypt(pass, cryptoEngin.key));
        }
    }
}
