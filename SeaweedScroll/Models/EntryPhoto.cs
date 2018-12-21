namespace SeaweedScroll.Models
{
    public class EntryPhoto: EntryContent
    {
        public override string Type
        {
            get { return "EntryPhoto"; }
        }
        public string PartialPath { get; set; }
        public string Caption { get; set; }
    }
}