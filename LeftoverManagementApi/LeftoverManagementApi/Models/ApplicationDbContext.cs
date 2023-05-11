using Microsoft.EntityFrameworkCore;

namespace LeftoverManagementApi.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<LeftoverManagement_User> LeftoverManagement_Users { get; set; }
        public DbSet<Record> Records { get; set; }
    }
}
