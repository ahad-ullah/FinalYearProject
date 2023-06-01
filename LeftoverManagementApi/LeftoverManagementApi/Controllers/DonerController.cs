using LeftoverManagementApi.ApiModels;
using LeftoverManagementApi.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Newtonsoft.Json;
using System.Security.Claims;

namespace LeftoverManagementApi.Controllers
{
	[Route("api/[controller]")]
	[ApiController]
	public class DonerController : ControllerBase
	{
		public ApplicationDbContext _context { get; set; }
		public DonerController(ApplicationDbContext context)
		{
			_context = context;
		}

		//[Authorize(Roles ="Doner")]
		[Route("addDonationRequest")]
		[HttpPost]
		public IActionResult addDonationRequest(DonationRequestModel model)
		{
			try
			{
				//var email = User.FindFirst(ClaimTypes.Name).Value;
				DonationsRequest request = new DonationsRequest()
				{
					Description = model.Description,
					DonationLocation = model.DonationLocation,
					DonerEmail = "dummy@gmail.com",
					RequestTime = DateTime.Now,
					IsAccepted = false,
					Status = "pending",
					DoneePhoneNo = model.PhoneNumber,
				};
				_context.Add(request);
				_context.SaveChanges();
			}
			catch (Exception e)
			{

				return new JsonResult(new
				{
					error = e.Message,
					isSuccess = false
				});
			}
			return new JsonResult(new
			{
				message = "Your request is recieved.",
				isSuccess = true
			});
		}
		[HttpGet]
		[Route("GetDonerRequests")]
		public IActionResult GetDonerRequests()
		{
			//var user = User.FindFirst(ClaimTypes.Name)?.Value;
			var requests = _context.donationsRequests.Where(x => x.IsAccepted == false).ToList();
			var a = new JsonResult(requests);
			return a;
		}
	}

}
