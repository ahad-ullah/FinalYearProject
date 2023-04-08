using LeftoverManagementApi.ApiModels;
using LeftoverManagementApi.Halpers;
using LeftoverManagementApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Hosting;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.AspNetCore.Mvc.Razor;
using Microsoft.Extensions.Hosting;
using Org.BouncyCastle.Asn1.X509;
using System.Reflection;

namespace LeftoverManagementApi.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AccountsController : ControllerBase
    {
        private ApplicationDbContext _context;
        private readonly JwtHandler jwtHandler;
        private readonly IWebHostEnvironment _webHostEnvironment;
        public AccountsController(ApplicationDbContext context, JwtHandler jwtHandler, IWebHostEnvironment webHostEnvironment)
        {
            _context = context;
            this.jwtHandler = jwtHandler;
            _webHostEnvironment = webHostEnvironment;
        }

        /// <summary>
        /// Login endpoint to get user loged into the application
        /// </summary>
        /// <param name="loginUser">Takes an object of type loginUser that contains Email address and Password of the user to validate the user.</param>
        /// <returns>A jwt string for the loged in user to authanticate and authorize the user for next requests.</returns>
        [HttpPost]
        [Route("Login")]
        [AllowAnonymous]
        public IActionResult Login([FromBody] LoginModel loginUser)
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
                        string token = jwtHandler.GenerateToke(user);
                        string imageUrl = string.Format("{0}://{1}{2}/Images/{3}", Request.Scheme, Request.Host, Request.PathBase, user.imagePath);
                        var response = new
                        {
                            user = new {
                                Email = user.Email,
                                FullName = user.FullName,
                                PhoneNumber = user.PhoneNumber,
                                Address = user.Address,
                                About = user.About,
                                ImageName = user.imagePath,
                                UserRole = user.userRole,
                                ImageUrl = imageUrl
                            },
                            token
                        };
                        return new JsonResult(response);
                    }
                    else
                    {
                        return new JsonResult(new {error = "Password not Matched" });
                    }
                }
                return new JsonResult(new { error = "User not found" });
            }
            catch (Exception e)
            {
                return new JsonResult(new { error = e.Message });
            }
        }

        /// <summary>
        /// Registers a user as doner to application
        /// </summary>
        /// <param name="donee">Takes information of the user who wants to register</param>
        /// <returns>Returns the status of the registration procedure</returns>
        [HttpPost]
        [Route("RegisterDonee")]
        public JsonResult RegisterDonee([FromBody] Donee donee)
        {
            ICryptoGraphy cryptoEngin = new CryptoEngine();
            LeftoverManagement_Users leftoverUser = new LeftoverManagement_Users();
            try
            {
                if (_context.LeftoverManagement_Users.Any(x => x.Email == donee.email))
                {
                    //here we will return something that will tell react app that this email already exists in the db
                    return new JsonResult(new { error = "User Already Exist" });
                }
                var pass = cryptoEngin.Encrypt(donee.password, cryptoEngin.key);
                leftoverUser.FullName = donee.fullName;
                leftoverUser.Email = donee.email;
                leftoverUser.Passowrd = pass;
                leftoverUser.RegistrationNumber = donee.RegistrationId;
                leftoverUser.userRole = "Donee";
                leftoverUser.imagePath = "fox.jpg";
                _context.LeftoverManagement_Users.Add(leftoverUser);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                return new JsonResult(new { error = e.Message });
            }

            return new JsonResult(new { success = "User Registered Successfully" });
        }


        [HttpPost]
        [Route("RegisterDoner")]
        public JsonResult RegisterDoner([FromBody] Doner doner)
        {
            ICryptoGraphy cryptoEngin = new CryptoEngine();
            LeftoverManagement_Users leftoverUser = new LeftoverManagement_Users();
            try
            {
                if (_context.LeftoverManagement_Users.Any(x => x.Email == doner.email))
                {
                    //here we will return something that will tell react app that this email already exists in the db
                    return new JsonResult(new { error = "User Already Exist" });
                }
                var pass = cryptoEngin.Encrypt(doner.password, cryptoEngin.key);
                leftoverUser.FullName = doner.fullName;
                leftoverUser.Email = doner.email;
                leftoverUser.Passowrd = pass;
                leftoverUser.userRole = "Doner";
                leftoverUser.imagePath = "fox.jpg";
                _context.LeftoverManagement_Users.Add(leftoverUser);
                _context.SaveChanges();
            }
            catch (Exception e)
            {
                return new JsonResult(new { error = e.Message });
            }

            return new JsonResult(new { success = "User Registered Successfully" });
        }

        /// <summary>
        /// send user an email verfication link to the registered email address.
        /// </summary>
        /// <param name="email">Email of the registered user</param>
        /// <returns>status to the procedure</returns>
        [HttpPost]
        [Authorize]
        [Route("EmailVarification")]
        public string EmailVarify(string email)
        {
            try
            {
                var user = _context.LeftoverManagement_Users.Where(x => x.Email == email).FirstOrDefault();
                if (user != null)
                {

                    IEmailService emailSender = new EmailSender();
                    string token = EmailSender.CreateToken();
                    user.VarificationToken = token;
                    user.TokenTime = DateTime.UtcNow.AddMinutes(20);
                    string verificationLink = @"https://localhost:7195/api/Accounts/VerifyToken?token=replaceToken".Replace("replaceToken", token);
                    emailSender.SendEmail(email, emailSender.CreateEmail(verificationLink));
                    _context.Update(user);
                    _context.SaveChanges(true);
                    return "Varification Link sent to your email address";
                }
                return "some error occured";
            }
            catch (Exception e) { return e.Message; }
        }
        /// <summary>
        /// Verifies the emial that is registered in the above function.
        /// </summary>
        /// <param name="token">It is the generated token that is sent to the user by email.</param>
        /// <returns>Returns the status of the procedure.</returns>
        [HttpGet]
        [Route("VerifyToken")]
        public IActionResult VarifyEmail(string token)
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
                        return Redirect("localhost:3000/login");
                    }
                    return Redirect("localhost:3000/error");
                }
                return Redirect("localhost:3000/error");
            }
            catch (Exception e)
            {
                return Redirect("localhost:3000/error");
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
                if (user != null)
                {
                    IEmailService emailSender = new EmailSender();
                    string token = EmailSender.CreateToken();
                    user.VarificationToken = token;
                    user.TokenTime = DateTime.UtcNow.AddMinutes(10);
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
        /// <summary>
        /// update the user profile
        /// </summary>
        /// <returns></returns>
        [HttpPost]
        [Route("UpdateProfile")]
        public async Task<IActionResult> updateProfile([FromForm] UpdateProfile profile)
        {
            var userToUpdate = _context.LeftoverManagement_Users.Where(x => x.Email == profile.Email).FirstOrDefault();
            if (userToUpdate != null)
            {
                try
                {
                    if (profile.ImageFile != null)
                    {
                        if (userToUpdate.imagePath!= "fox.jpg")
                        {
                            DeleteImage(userToUpdate.imagePath);
                        }
                        userToUpdate.imagePath = await SaveImage(profile.ImageFile);
                    }
                    userToUpdate.Address = profile.Address;
                    userToUpdate.FullName = profile.FullName;
                    userToUpdate.PhoneNumber = profile.PhoneNumber;
                    userToUpdate.About = profile.About;
                    _context.Update(userToUpdate);
                    _context.SaveChanges();

                }
                catch (Exception e)
                {

                    return BadRequest(e.Message);
                }
            }

            //try
            //{
            //    var userToUpdate = _context.LeftoverManagement_Users.Where(x => x.Email == user.Email).FirstOrDefault();
            //    
            //    string webRootPath = _webHostEnvironment.WebRootPath;
            //    string upload = webRootPath + WebConstants.ProfilePicPath;
            //    string fileName = Guid.NewGuid().ToString();
            //    string extension = Path.GetExtension(files[0].FileName);
            //    //upload the file to the server this code actually copies the file from one location to a given location
            //    if (userToUpdate != null)
            //    {
            //        using (var fileStream = new FileStream(Path.Combine(upload, fileName + extension), FileMode.Create))
            //        {
            //            //file in files[0] is going to be copied to server using file stream
            //            files[0].CopyTo(fileStream);
            //        }
            //        userToUpdate.Address = user.Address;
            //        userToUpdate.FullName = user.FullName;
            //        userToUpdate.PhoneNumber = user.PhoneNumber;
            //        userToUpdate.imagePath = Path.Combine(upload,fileName + extension);
            //        _context.Update(userToUpdate);
            //        _context.SaveChanges();
            //        return "Profile Updated Successfully";
            //    }
            //    return "somme error occured";
            //}
            //catch (Exception e)
            //{

            //    return e.Message;
            //}

            return Ok("Success");
        }

        [NonAction]
        public async Task<string> SaveImage(IFormFile imageFile)
        {
            string imageName = new String(Path.GetFileNameWithoutExtension(imageFile.FileName).Take(10).ToArray()).Replace(' ', '-');
            imageName = imageName + DateTime.Now.ToString("yymmssfff") + Path.GetExtension(imageFile.FileName);
            var imagePath = Path.Combine(_webHostEnvironment.ContentRootPath, "Images", imageName);
            using (var fileStream = new FileStream(imagePath, FileMode.Create))
            {
                await imageFile.CopyToAsync(fileStream);
            }
            return imageName;
        }
        [NonAction]
        public void DeleteImage(string imageName)
        {
            var imagePath = Path.Combine(_webHostEnvironment.ContentRootPath, "Images", imageName);
            if (System.IO.File.Exists(imagePath))
                System.IO.File.Delete(imagePath);
        }
    }
}

