namespace SeaweedScroll.Models
{
    public class Entry
    {
        public int Id { get; set; }
        public string BannerImageFileName { get; set; }
        public string Title { get; set; }
        public string StringDate { get; set; }
        public EntryContentContainer EntryContentContainer { get; set; }
    }
}