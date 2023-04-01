namespace LeftoverManagementApi.ApiModels
{
    public class UpdateProfile
    {
        public IFormFile ImageFile { get; set; }
        public string FullName { get; set; }
        public string Email { get; set; }
    }
}
