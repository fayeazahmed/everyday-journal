using EverydayJournal.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.Extensions.Logging;
using Newtonsoft.Json;
using Microsoft.EntityFrameworkCore;
using System.Linq;
using System.Text.Json;
using Newtonsoft.Json.Linq;
using Microsoft.AspNetCore.Authorization;
using System;

namespace EverydayJournal.Controllers
{
    [ApiController]
    [Route("[controller]")]
    public class JournalController : ControllerBase
    {
        private readonly ILogger<JournalController> _logger;
        private readonly JournalContext _db;

        public JournalController(JournalContext db, ILogger<JournalController> logger)
        {
            _db = db;
            _logger = logger;
        }

        [HttpGet("{user}/{date}"), Authorize]
        public IActionResult Index(string user, string date)
        {
            Journal journal = _db.Journals.FirstOrDefault(journal => journal.date == date && journal.user == user);
            if (journal != null)
            {
                string result = JsonConvert.SerializeObject(journal);
                return Ok(result);
            }
            else
            {
                journal = new Journal { text = "", date = date, user = user };
                _db.Journals.Add(journal);
                _db.SaveChanges();
                string result = JsonConvert.SerializeObject(journal);
                return Ok(result);
            }            
        }

        [HttpPost("{user}/{date}"), Authorize]
        public IActionResult Post(string user, string date, [FromBody] JsonElement body)
        {
            JObject obj = (JObject)JsonConvert.DeserializeObject(body.GetRawText());
            Journal journal = _db.Journals.FirstOrDefault(journal => journal.date == date && journal.user == user);
            string text = (string)obj["journalText"];
            
            if (journal == null)
            {
                journal = new Journal { text = text, date = date, user = user };
                _db.Journals.Add(journal);
            } else
            {
                journal.text = text;
                _db.Entry(journal).State = EntityState.Modified;
            }
            _db.SaveChanges();
            return Ok("updated");
        }

        [HttpPost("temp/{guid}/{date}")]
        public IActionResult Temp(string guid, string date, [FromBody] JsonElement body)
        {
            JObject obj = (JObject)JsonConvert.DeserializeObject(body.GetRawText());
            Temporary journal = _db.Temps.FirstOrDefault(journal => journal.sessionId == guid && journal.date == date);
            string text = (string)obj["journalText"];
            if (journal == null)
            {
                journal = new Temporary { text = "", date = date, sessionId = guid };
                _db.Temps.Add(journal);
            }
            else if((bool)obj["changingPage"] == false)
            {
                journal.text = text;
            }
            _db.SaveChanges();
            return Ok(journal);
        }
    }
}
