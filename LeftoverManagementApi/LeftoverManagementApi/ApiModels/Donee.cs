using System.ComponentModel.DataAnnotations;

namespace LeftoverManagementApi.ApiModels
{
    public class Donee
    {
        [Required]
        public string fullName { get; set; }
        [Required]
        [EmailAddress]
        public string email { get; set; }
        [Required]
        public string password { get; set; }

    }
}
