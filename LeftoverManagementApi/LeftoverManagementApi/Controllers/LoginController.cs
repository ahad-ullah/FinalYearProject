using LeftoverManagementApi.Halpers;
using LeftoverManagementApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;

namespace LeftoverManagementApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private ApplicationDbContext _context;
        private readonly JwtHandler jwtHandler;

        public LoginController(ApplicationDbContext context, JwtHandler jwtHandler)
        {
            _context = context;
            this.jwtHandler = jwtHandler;
        }
        [HttpPost]
        [Route("Login")]
        [AllowAnonymous]
        public string Login([FromBody] LoginModel loginUser)
        {
            ICryptoGraphy cryptoEngin = new CryptoEngine();
            var user = _context.LeftoverManagement_Users.Where(x => x.Email == loginUser.email).FirstOrDefault();
            try
            {
                if (user != null)
                {
                    string pass = cryptoEngin.Decrypt(user.Passowrd, cryptoEngin.key);
                    if (loginUser.password == pass)
                    {
                        return jwtHandler.GenerateToke(user);
                    }
                    else
                    {
                        return "User Name or password doesn't match.";
                    }
                }
                else
                {
                    return "User Doesn't exist";
                }
            }
            catch (Exception e)
            {
                return e.Message;
            }
        }
        [Route("GetUser")]
        [HttpGet]
        [Authorize]
        public List<LeftoverManagement_Users> GetLeftoverManagementUsers()
        {
            var list = _context.LeftoverManagement_Users.ToList();
            return list;
        }

    }
}