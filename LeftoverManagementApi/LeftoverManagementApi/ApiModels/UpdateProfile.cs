﻿namespace LeftoverManagementApi.ApiModels
{
    public class UpdateProfile
    {
        public IFormFile? ImageFile { get; set; }
        public string FullName { get; set; }
        public string PhoneNumber { get; set; }
        public string Address { get; set; }
        public string About { get; set; }
        public string Email { get; set; }

    }
}
