using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;
using SeaweedScroll.Models;

namespace SeaweedScroll.Controllers
{
    [Route("api/[controller]")]
    public class BlogDataController : Controller
    {
        [HttpGet("[action]")]
        public IEnumerable<Entry> BlogEntry(int entryDateId)
        {
            return EntryData.Entries;
            //List<Entry> entries = new List<Entry>();
            //Entry newEntry = new Entry()
            //{
            //    BlogJsx = _entries[entryDateId == 0 ? 20181219 : entryDateId]
            //};
            //BlogEntryData.Entries.Add(newEntry);
            //return entries;
        }
    }
}