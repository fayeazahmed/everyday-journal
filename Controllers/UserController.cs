using EverydayJournal.Models;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Identity;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Logging;
using Microsoft.IdentityModel.Tokens;
using System;
using System.Collections.Generic;
using System.IdentityModel.Tokens.Jwt;
using System.Linq;
using System.Security.Claims;
using System.Text;
using System.Threading.Tasks;

namespace EverydayJournal.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class UserController : ControllerBase
    {
        private readonly UserManager<IdentityUser> _userManager;
        private readonly SignInManager<IdentityUser> _signInManager;
        private readonly ILogger<JournalController> _logger;
        private readonly IConfiguration _configuration;
        private readonly JournalContext _db;

        public UserController(UserManager<IdentityUser> userManager, JournalContext db, IConfiguration configuration, SignInManager<IdentityUser> signInManager, ILogger<JournalController> logger)
        {
            _userManager = userManager;
            _signInManager = signInManager;
            _configuration = configuration;
            _logger = logger;
            _db = db;
        }

        [HttpPost("register")]
        public async Task<IActionResult> RegisterAsync([FromBody] BasicUser body)
        {
            string username = body.username;
            string password = body.password;
            string sessionId = body.sessionId;
            IdentityUser user = await _userManager.FindByNameAsync(username);
            
            if(user != null)
            {
                return StatusCode(StatusCodes.Status409Conflict);
            }

            user = new IdentityUser { UserName = username };
            IdentityResult result = await _userManager.CreateAsync(user, password);

            if (result.Succeeded) 
            { 
                await Login(user, password);
                var response = new { user, token = GenerateJwtToken(username, user) };
                _db.Temps.RemoveRange(_db.Temps.Where(j => j.sessionId == sessionId));
                _db.SaveChanges();
                return Ok(response);
            }
            else
                return StatusCode(StatusCodes.Status406NotAcceptable);
        }

        [HttpPost("login")]
        public async Task<IActionResult> LoginAsync([FromBody] BasicUser body)
        {
            string username = body.username;
            string password = body.password;
            string sessionId = body.sessionId;
            IdentityUser user = await _userManager.FindByNameAsync(username);

            if (user == null)
            {
                return StatusCode(StatusCodes.Status404NotFound);
            }
            if (await Login(user, password)) 
            {
                var response = new { user = new { id = user.Id, username }, token = GenerateJwtToken(username, user) };
                List<Temporary> tempJournals = _db.Temps.Where(j => j.sessionId == sessionId).ToList();

                foreach (Temporary journal in tempJournals)
                {
                    Journal _journal = _db.Journals.FirstOrDefault(j => j.date == journal.date && journal.text != "");
                    Console.WriteLine(_journal);
                    if(_journal == null)
                    {
                        _journal = new Journal { date = journal.date, text = journal.text, user = user.Id };
                        _db.Journals.Add(_journal);
                    }
                    _db.Temps.Remove(journal);
                }
                //_db.Temps.RemoveRange(_db.Temps.Where(j => j.sessionId == sessionId));
                _db.SaveChanges();
                return Ok(response);
            }
            else
                return StatusCode(StatusCodes.Status401Unauthorized);
        }

        [HttpGet("logout")]
        public async Task<IActionResult> LogoutAsync()
        {
            await _signInManager.SignOutAsync();
            return Ok("Signed out");
        }

        [HttpGet("authenticate"), Authorize]
        public async Task<IActionResult> Authenticate()
        {
            string userId = User.Claims.Where(c => c.Type == ClaimTypes.NameIdentifier).Select(c => c.Value).SingleOrDefault();
            IdentityUser user = await _userManager.FindByIdAsync(userId);
            return Ok(new { id = user.Id, username = user.UserName });
        }

        public class BasicUser
        {
            public string username { get; set; }
            public string password { get; set; }
            public string sessionId { get; set; }
        }

        private async Task<bool> Login(IdentityUser user, string password)
        {
            var result = await _signInManager.PasswordSignInAsync(user, password, true, false);
            if (result.Succeeded)
                return true;
            else
                return false;
        }

        private object GenerateJwtToken(string username, IdentityUser user)
        {
            List<Claim> claims = new List<Claim>
            {
                new Claim(JwtRegisteredClaimNames.Sub, username),
                new Claim(JwtRegisteredClaimNames.Jti, Guid.NewGuid().ToString()),
                new Claim(ClaimTypes.NameIdentifier, user.Id)
            };

            SymmetricSecurityKey key = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:JwtKey"]));
            SigningCredentials creds = new SigningCredentials(key, SecurityAlgorithms.HmacSha256);
            DateTime expires = DateTime.Now.AddHours(6);

            JwtSecurityToken token = new JwtSecurityToken(
                _configuration["Jwt:JwtIssuer"],
                _configuration["Jwt:JwtAudience"],
                claims,
                expires: expires,
                signingCredentials: creds
            );

            return new JwtSecurityTokenHandler().WriteToken(token);
        }
    }
}
