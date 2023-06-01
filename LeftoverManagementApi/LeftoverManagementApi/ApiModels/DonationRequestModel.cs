using System.ComponentModel.DataAnnotations;

namespace LeftoverManagementApi.ApiModels
{
	public class DonationRequestModel
	{
		[Required]
        public string Description { get; set; }
		[Required]
		public string DonationLocation { get; set; }
		[Required]
        public string PhoneNumber { get; set; }
    }
}
