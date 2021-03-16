using Microsoft.AspNetCore.Identity.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Linq;
using System.Threading.Tasks;

namespace EverydayJournal.Models
{
    public class JournalContext: IdentityDbContext
    {
        public JournalContext(DbContextOptions<JournalContext> options):base(options)
        {

        }

        public DbSet<Journal> Journals { get; set; }
        public DbSet<Temporary> Temps { get; set; }
    }

    public class Journal
    {
        public int id { get; set; }
        [Required]
        [Column(TypeName="varchar")]
        public string text { get; set; }
        [Required]
        [Column(TypeName = "varchar")]
        public string date { get; set; }
        [Required]
        [Column(TypeName = "varchar")]
        public string user { get; set; }
    }

    public class Temporary
    {
        public int id { get; set; }
        [Required]
        [Column(TypeName = "varchar")]
        public string sessionId { get; set; }
        [Required]
        [Column(TypeName = "varchar")]
        public string text { get; set; }
        [Required]
        [Column(TypeName = "varchar")]
        public string date { get; set; }
    }
}
