using System.ComponentModel.DataAnnotations;

namespace LeftoverManagementApi.Models
{
    public class LeftoverManagement_Users
    {
        [Key]
        public int Id { get; set; }
        public string? FullName { get; set; }
        [Required]
        public string Email { get; set; }
        [Required]
        public string? Passowrd { get; set; }
        public string? PhoneNumber { get; set; }
        public string? Address { get; set; }
        public DateTime? TokenTime { get; set; }
        public string? VarificationToken { get; set; }
        public bool EmailVarification { get; set; } = false;
    }
}
