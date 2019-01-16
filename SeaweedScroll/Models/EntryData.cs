using System.Collections.Generic;

namespace SeaweedScroll.Models
{
    public class EntryData
    {
        public static List<Entry> Entries = new List<Entry>()
        {
                        #region To Tokyo!
            new Entry()
            {
                Id = 20190116,
                BannerImageFileName = "aircraft-airplane-aviation-615060.jpg",
                Title = "To Tokyo!",
                StringDate = "January 16, 2018",
                EntryContentContainer = new EntryContentContainer()
                {
                    EntryContents = new List<EntryContent>()
                    {
                        new EntryParagraph()
                        {
                            Text = "We can't believe it's finally here! We have been dreaming of this moment since we boarded our flight home from Kyoto just 2 years ago. We wanted to return right away, but God had so much to do in us before that could happen. We can't wait to see what will happen this week! The internet connection from our hotel room seems to be very strong, so praise God that there will be few complications! The flight in was rather simple, all things considered. Just a 1 hour flight to Toronto and a 13 hour and 20 minute flight to Tokyo. Then another hour-long bus ride to a place that was close enough to our hotel that we could afford a taxi. We were immediately greeted by the familiar excellent customer service that comes standard in Japan. I was pretty tired when we first got in, but when we saw the city, I knew I couldn't miss a second of it! We rode down through Shibuya and Shinjuku on our way to the train station, and it was pretty amazing to be greeted with the lights, the crowds, the narrow streets, the skyscrapers. All I could think of was, \"We're here, God. Use us for Your kingdom purposes!\""
                        },
                        new EntryParagraph()
                        {
                            Text = "After arriving at the hotel we had a light dinner at what I can only describe as a Japanese Denny's. It had a very similar vibe and look to it except they served Japanese \"diner\" food. Fun fact, Denny's actually does have some restaurants here in Tokyo (we saw them on our way in). I looked at the menu, and I'm afraid you won't find your American favorites in Japan!"
                        },
                        new EntryParagraph()
                        {
                            Text = "Before I go, just a few more things to share with you. First, I apologize in advance if some of our future posts take your web browser a while to load. Long story short, I ran out of time before the trip and wasn't able to speed up our website, so it might take a while to load some of these images. So please be patient, or if you are a programmer, feel free to fork my code (GaijinSoft SeaweedScroll) and push the solution :-). So excited to share what God does over the next several days with you! Love you all!"
                        }
                    }
                }
            },
            #endregion

            #region Christmas Update
            new Entry()
            {
                Id = 20181219,
                BannerImageFileName = "ball-blur-bokeh-717988.jpg",
                Title = "Christmas Update",
                StringDate = "December 16, 2018",
                EntryContentContainer = new EntryContentContainer()
                {
                    EntryContents = new List<EntryContent>()
                    {
                        new EntryParagraph()
                        {
                            Text = "Christmas is one of my favorite times of the year. It is both a time of anticipation for the Christmas season and the new year, and a time of reflection as the current year passes. 2018 has been a year of revelation and blessing."
                        },
                        new EntryParagraph()
                        {
                            Text = "We started this past year by taking \"Perspectives on the World Christian Movement\" in the spring until late April. This course was such a blessing! We learned about the many ways God is fulfilling His promise of bringing people from every nation, tribe, peoples, and languages to His saving grace. This course set our spirits on fire, and we began to pray fervently for direction and guidance as we sought a ministry vision for the people of Japan. Through those months of constant prayer, God revealed to us the needs of the hikikomori, those who isolate themselves from six months to many decades. God revealed the pieces of this vision to us like a jigsaw puzzle -- giving us clues and pieces that seemed as though they might never fit together. The more we prayed, the more we saw God’s faithfulness in connecting these seemingly disconnected pieces. Seeing a few pieces at a time come together to form a unified piece of the puzzle has been riveting! We believe based on what we've seen thus far of the puzzle is that God desires for us to create an online community of hikikomori and to use games, blogs, and various forms of media to connect with these people. Our goal is to cultivate a community, lead by the Holy Spirit, who will love others in the community supernaturally as Christ loves us. We will be meeting their relational needs, but also meeting their emotional needs by connecting them with anonymous, professional counseling. We believe God desires to transform these people and set them free from their self-confinement then go on to reach their friends and family for the Gospel."
                        },
                        new EntryParagraph()
                        {
                            Text = "This has been all very exciting, but I have been wondering exactly what a ministry like this might look like. I felt like God might be calling me to start an online discipleship group at our church, but I wasn't exactly sure where I would start or who I could invite to come. I thought that perhaps I had misheard from God, but Amanda urged me to continue waiting. I’m very glad I did. I connected with a very interesting man by the name of Matt Souza. Him and his wife run an online gaming church whose mission is to reach gamers throughout the world. The group is known as GodSquad gaming. I met with Pastor Souzy, as he is fondly known in his church, and we discussed vision. \"How exactly are you going to reach these shut-ins in Japan,\" Souza asked me, to which I replied honestly, \"I don’t know exactly. I was hoping your church could help with that!\" I was certainly stumped in that moment, but I knew that I had stumbled across something good. Here was someone who was not only doing what I believed God was calling me to do right here in this moment, but someone who clearly has a lot of these details worked out and can help further us in our future vision in Japan. We plan on meeting Pastor Souzy and his wife in person in February. After that, we’re going to start serving alongside his staff to learn exactly what makes this ministry so successful. Praise God!"
                        },
                        new EntryParagraph()
                        {
                            Text = "I'm very excited for what God has planned for 2019. I believe it will be a year of hard work but also one which will provide clarity and confirmation for the future. We are starting out the year in a very exciting way by going on our vision trip to Tokyo! We will be leaving Tuesday, the 15th, and returning on the 25th. Amanda and I are incredibly excited to see what God wants to show us in Tokyo! We are looking forward to meeting with potential ministry partners and meeting the folks who may one day be our family far from home."
                        },
                        new EntryParagraph()
                        {
                            Text = "[Edit January 6]\nWe are very excited to announce that we are now fully funded! Praise the LORD! Thank you so much for your contributions and all of your prayers. Please continue to pray for us as we have much to do before we go to Japan."
                        },
                        new EntryPhoto()
                        {
                            Caption = "Merry Christmas from Sam & Amanda - 2018",
                            FileName = "SamAndAmanda_Christmas2018.jpg",
                            Height = "75vw"
                        }
                    }
                }
            }
            #endregion
        };
    }
}