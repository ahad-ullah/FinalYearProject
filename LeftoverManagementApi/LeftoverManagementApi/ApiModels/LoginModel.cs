using System.ComponentModel.DataAnnotations;

namespace LeftoverManagementApi.ApiModels
{
    public class LoginModel
    {
        [Required]
        [EmailAddress]
        public string email { get; set; }
        [Required]
        public string password { get; set; }
    }
}
