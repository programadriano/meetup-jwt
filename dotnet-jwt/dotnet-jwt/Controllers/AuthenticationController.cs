using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using dotnet_jwt.Business;
using dotnet_jwt.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace dotnet_jwt.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class AuthenticationController : ControllerBase
    {
        private readonly IAuthenticateService _authService;

        public AuthenticationController(IAuthenticateService authService)
        {
            _authService = authService;
        }

        [AllowAnonymous]
        [HttpPost]
        public ActionResult Post([FromBody] TokenRequest request)
        {
            if (!ModelState.IsValid)
            {
                return BadRequest("Invalid Request");
            }

            string token;
            if (_authService.IsAuthenticated(request, out token))
            {
                var result = new TokenResult();
                result.Token = token;
                return Ok(result);
            }

            return BadRequest("Invalid Request");

        }
    }
}