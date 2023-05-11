using Microsoft.AspNetCore.Mvc.RazorPages.Infrastructure;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace LeftoverManagementApi.Models
{
    public class LeftoverManagement_User
    {
        [Key]
        public int Id { get; set; }
        public string? FullName { get; set; }
        public string Email { get; set; }
        public string? Passowrd { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Address { get; set; }
        public string? About { get; set; }
        public DateTime? TokenTime { get; set; }
        public string? VarificationToken { get; set; }
        public bool EmailVarification { get; set; } = false;
        public string? imagePath { get; set; }
        public string? userRole { get; set; }
        public string? RegistrationNumber { get; set; }
        [NotMapped]
        public string ImageSrc { get; set; }
    }
}
