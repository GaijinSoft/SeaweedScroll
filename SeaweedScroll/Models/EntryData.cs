using System.Collections.Generic;

namespace SeaweedScroll.Models
{
    public class EntryData
    {
        public static List<Entry> Entries = new List<Entry>()
        {
            new Entry()
            {
                Id = 20181219,
                BannerImagePartialPath = "../../images/ball-blur-bokeh-717988.jpg",
                Title = "Christmas Update",
                StringDate = "December 16, 2018",
                EntryContentContainer = new EntryContentContainer()
                {
                    EntryContents = new List<EntryContent>()
                    {
                        new EntryParagraph()
                        {
                            Text = "We've done a lot this year. MORE THAN WE'VE EVER DONE BEFORE!!!"
                        },
                        new EntryParagraph()
                        {
                            Text = "It's been a lot of fun"
                        },
                        new EntryPhoto()
                        {
                            Caption = "A photo of our favorite place",
                            PartialPath = "../../images/ball-blur-bokeh-717988.jpg"
                        }
                    }
                }
            }
        };
    }
}