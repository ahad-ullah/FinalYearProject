using Microsoft.EntityFrameworkCore;

namespace LeftoverManagementApi.Models
{
    public class ApplicationDbContext : DbContext
    {
        public ApplicationDbContext(DbContextOptions<ApplicationDbContext> options)
            : base(options)
        {
        }
        public DbSet<LeftoverManagement_Users> LeftoverManagement_Users { get; set; }
    }
}
