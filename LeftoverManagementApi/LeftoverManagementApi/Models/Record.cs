namespace LeftoverManagementApi.Models
{
    public class Record
    {
        public int Id { get; set; }
        public string DonatedBy { get; set; }
        public string DonatedTo { get; set; }
        public DateTime DonationTime { get; set; }
        public string Donation { get; set; }
        public string MyProperty { get; set; }
    }
}
