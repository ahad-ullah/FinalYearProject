using LeftoverManagementApi.Halpers;
using LeftoverManagementApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Org.BouncyCastle.Asn1.X509;

namespace LeftoverManagementApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    [AllowAnonymous]
    public class AccountsController : ControllerBase
    {
        private ApplicationDbContext _context;
        private readonly JwtHandler jwtHandler;
        public AccountsController(ApplicationDbContext context, JwtHandler jwtHandler)
        {
            _context = context;
            this.jwtHandler = jwtHandler;
        }

        //
        /// <summary>
        /// Login endpoint to get user loged into the application
        /// </summary>
        /// <param name="loginUser">Takes an object of type loginUser that contains Email address and Password of the user to validate the user.</param>
        /// <returns>A jwt string for the loged in user to authanticate and authorize the user for next requests.</returns>
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

        /// <summary>
        /// Registers a user to application
        /// </summary>
        /// <param name="leftoverUser">Takes information of the user who wants to register.</param>
        /// <returns>Returns the status of the registration procedure.</returns>
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
                string verificationLink = @"https://localhost:7195/api/Signup/VerifyToken?token=replaceToken".Replace("replaceToken", token);
                emailSender.SendEmail(leftoverUser.Email, emailSender.CreateEmail(verificationLink));
                _context.LeftoverManagement_Users.Add(leftoverUser);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                return e.Message;
            }

            return "Data Saved.";
        }
        /// <summary>
        /// Verifies the emial that is registered in the above function.
        /// </summary>
        /// <param name="token">It is the generated token that is sent to the user by email.</param>
        /// <returns>Returns the status of the procedure.</returns>
        [HttpGet]
        [Route("VerifyToken")]
        public string VarifyEmail(string token)
        {
            try
            {
                if (_context.LeftoverManagement_Users.Any(x => x.VarificationToken == token))
                {

                    var user = _context.LeftoverManagement_Users.Where(x => x.VarificationToken == token).FirstOrDefault();
                    if (user != null && user.TokenTime >= DateTime.UtcNow)
                    {
                        user.EmailVarification = true;
                        user.VarificationToken = "";
                        _context.LeftoverManagement_Users.Update(user);
                        _context.SaveChanges();
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
        /// <summary>
        /// Sends the link to email of the user to request reset password
        /// </summary>
        /// <param name="email">email of the user who is requesting to reset the password</param>
        /// <returns>status of the procedure</returns>
        [HttpPost]
        public string ForgetPassword(string email)
        {
            try
            {
                var user = _context.LeftoverManagement_Users.Where(x => x.Email == email).FirstOrDefault();
                if (user!=null)
                {
                    IEmailService emailSender = new EmailSender();
                    string token = EmailSender.CreateToken();
                    user.VarificationToken= token;
                    user.TokenTime= DateTime.UtcNow.AddMinutes(10);
                    _context.LeftoverManagement_Users.Update(user);
                    _context.SaveChanges();
                    string verificationLink = @"https://localhost:7195/api/Accounts/ResetPassword?token=replaceToken".Replace("replaceToken", token);
                    emailSender.SendEmail(email, emailSender.CreateEmail(verificationLink));
                    return "Password reset link sent to the entered email address";

                }
                return "User not found";
            }
            catch (Exception e)
            {

                return e.Message;
            }
        }
    }
}
