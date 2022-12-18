using LeftoverManagementApi.Halpers;
using LeftoverManagementApi.Helpers;
using LeftoverManagementApi.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace LeftoverManagementApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private ApplicationDbContext _context;
        public LoginController(ApplicationDbContext context)
        {
            _context = context;
        }
        [HttpPost]
        public IActionResult Login(string email, string password)
        {
            ICryptoGraphy cryptoEngin = new CryptoEngine();
            var user = _context.LeftoverManagement_Users.Where(x=>x.Email== email).FirstOrDefault();
            if (user!=null)
            {
                string pass = cryptoEngin.Decrypt(user.Passowrd, cryptoEngin.key);
                if (password==pass)
                {
                    return Ok();
                }
                else
                {
                    return BadRequest("User doesn't exist");
                }
            }
            else
            {
                return BadRequest("User Doesn't exist");
            }
         }

    }
}
