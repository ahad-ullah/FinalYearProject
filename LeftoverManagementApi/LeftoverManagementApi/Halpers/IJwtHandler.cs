using LeftoverManagementApi.Models;

namespace LeftoverManagementApi.Halpers
{
	public interface IJwtHandler
	{
		string GenerateToke(LeftoverManagement_User user);
	}
}