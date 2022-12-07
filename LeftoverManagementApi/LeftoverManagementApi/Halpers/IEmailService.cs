namespace LeftoverManagementApi.Halpers
{
    interface IEmailService
    {
        string CreateEmail(string token);
        void SendEmail(string ToEmail,string emailBody);
    }
}
