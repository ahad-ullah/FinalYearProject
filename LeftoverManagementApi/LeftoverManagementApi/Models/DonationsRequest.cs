namespace LeftoverManagementApi.Models
{
	public class DonationsRequest
	{
        public int Id { get; set; }
        public string DonerEmail { get; set; }
        public string? DoneeEmail { get; set; }
        public string DoneePhoneNo { get; set; }
        public string Status { get; set; }
        public bool IsAccepted { get; set; }
        public DateTime RequestTime { get; set; }
        public DateTime? AcceptanceTime { get; set; }
        public string Description { get; set; }
        public string DonationLocation { get; set; }
        public string? DoneeRegistrationNo { get; set; }
    }
}
