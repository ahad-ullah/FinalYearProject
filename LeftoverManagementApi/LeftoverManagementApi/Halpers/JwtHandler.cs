﻿using LeftoverManagementApi.Models;
using Microsoft.IdentityModel.Tokens;
using System.IdentityModel.Tokens.Jwt;
using System.Security.Claims;
using System.Text;

namespace LeftoverManagementApi.Halpers
{
	public class JwtHandler : IJwtHandler
	{
		private readonly string key;
		public JwtHandler(string key)
		{
			this.key = key;
		}

		public string GenerateToke(LeftoverManagement_User user)
		{
			JwtSecurityTokenHandler tokenHandler = new JwtSecurityTokenHandler();
			var tokenKey = Encoding.ASCII.GetBytes(key);
			SecurityTokenDescriptor securityTokenDescriptor = new SecurityTokenDescriptor
			{
				Subject = new ClaimsIdentity(new Claim[]
				{
					new Claim(ClaimTypes.Name, user.Email),
					new Claim(ClaimTypes.Role, user.userRole)
				}),
				Expires = DateTime.UtcNow.AddHours(2),
				SigningCredentials = new SigningCredentials(new SymmetricSecurityKey(tokenKey), SecurityAlgorithms.HmacSha256Signature),
			};
			var token = tokenHandler.CreateToken(securityTokenDescriptor);
			return tokenHandler.WriteToken(token);
		}
	}
}
