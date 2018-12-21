namespace SeaweedScroll.Models
{
    public class EntryParagraph: EntryContent
    {
        public override string Type
        {
            get { return "EntryParagraph"; }
        }
        public string Text { get; set; }
    }
}