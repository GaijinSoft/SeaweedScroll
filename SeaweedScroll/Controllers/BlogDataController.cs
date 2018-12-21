using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Mvc;

namespace SeaweedScroll.Controllers
{
    [Route("api/[controller]")]
    public class BlogDataController : Controller
    {
        private static Dictionary<int,string> _entries = new Dictionary<int, string>
        {
            {
                20181219,

                "<BannerImage src='../../images/ball-blur-bokeh-717988.jpg' />" +
                "<Title>Christmas Update</Title>" +
                "<EntryInfo stringDate=\"December 16, 2018\" />" +
                "<hr id=\"titleSeparator\" />" +
                "<EntryContent>" +
                    "<EntryParagraph>" +
                        "We've done a lot this year. MORE THAN WE'VE EVER DONE BEFORE!!!" +
                    "</EntryParagraph>" + 
                    "<EntryParagraph>" +
                        "It's been a lot of fun" +
                    "</EntryParagraph>" +
                    "<EntryPhoto src='../../images/ball-blur-bokeh-717988.jpg' caption=\"A photo of our favorite place\" />" +
                "</EntryContent>"
            }
        };

        [HttpGet("[action]")]
        public IEnumerable<Entry> BlogEntry(int entryDateId)
        {
            List<Entry> entries = new List<Entry>();
            Entry newEntry = new Entry()
            {
                BlogJsx = _entries[entryDateId == 0 ? 20181219 : entryDateId]
            };
            entries.Add(newEntry);
            return entries;
        }

        public class Entry
        {
            public string BlogJsx { get; set; }
        }
    }
}