import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Banner } from './Banner';

export default class Support extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div>
                <Banner />
                <div id="HomeContent">
                    <div id="SupportPage_CrossDawn" className="fullRowImg inspirationPage">
                        <div className="inspirationRow">
                            We have been praying for a revival
                        </div>
                    </div>
                    <div id="SupportPage_BloomingRose" className="fullRowImg inspirationPage">
                        <div className="inspirationRow">
                            We believe God desires to do something new
                        </div>
                    </div>
                    <div id="SupportPage_Galaxy" className="fullRowImg inspirationPage">
                        <div className="inspirationRow">
                            To bring life and hope to a people He loves but who do not know Him
                        </div>
                    </div>
                    <div id="SupportPage_BeachBottle" className="fullRowImg inspirationPage">
                        <div className="inspirationRow">
                            His story must be told but we need story-tellers
                        </div>
                    </div>
                    <div id="SupportPage_BoardGame" className="fullRowImg inspirationPage">
                        <div className="inspirationRow">
                            Will you partner with us?
                        </div>
                    </div>
                    <div id="SupportPage_HikingView" className="fullRowImg inspirationPage">
                        <div className="inspirationRow">
                            And join us for a journey that will last forever
                        </div>
                    </div>
                    <div className="sectionSeparator" />
                    <div id="SupportPage_OurStory">
                        <div className="SupportPage_SectionHeader">
                            Our Story
                        </div>
                        <div id="SupportPage_OurStoryDescription">
                            <div className="SupportPage_Samanda fullRowImg inspirationPage" />
                            <div className="SupportPage_Samanda transparentImage fullRowImg inspirationPage" />
                            <div className="longTextInspirationBlock">
                                <div className="inspirationRow">
                                    <div>
                                        In 2015, God placed a burden on our hearts for the Japanese people. Since then, He has not stopped opening doors for us to serve Him as tentmaker missionaries in Tokyo, Japan. After 3 years of prayer, God has given us a vision of delivering the Gospel of Hope to an invisible group in Japanese society. We believe that God desires to use artists and engineers to make the Gospel come alive to those who would otherwise never hear it.
                                    </div>
                                    <div className="paragraphSeparator" />
                                    <div>
                                        In January 2019, we will take the next step in our journey. We are traveling to Tokyo, Japan to meet with potential missions partners to see what God is already doing in Japan and share the vision that God has given us.
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sectionSeparator" />
                    <div id="SupportPage_HowCanIHelp">
                        <div className="SupportPage_SectionHeader">
                            How can I help?
                        </div>
                        <div id="SupportPage_HowCanIHelpDescription">
                            <div />
                            <div id="SupportPage_HowCanIHelp_Pray">
                                <div className="SupportPage_HowCanIHelp_SubHeader">
                                    Pray
                                </div>
                                <div className="SupportPage_HowCanIHelp_SubDescription">
                                    We need supporters who will pray for one or more important prayer points for our vision trip.
                                </div>
                                <ul className="SupportPage_HowCanIHelp_SubDescription">
                                    <li><b>Direction + Clarity</b> -- <i>A clear purpose and opportunity for the future</i></li>
                                    <li><b>Community</b> -- <i>Ministry partners + deep, intimate friendships</i></li>
                                    <li><b>Location</b> -- <i>Tokyo is huge! Where is God calling us to make our home</i></li>
                                    <li><b>Spiritual Warfare</b> -- <i>For God to go before us to clear our path</i></li>
                                    <li><b>Travel + Health</b> -- <i>Safe travels and healthiness throughout our trip</i></li>
                                    <li><b>Financial Support</b> -- <i>The Church body to help support our mission efforts</i></li>
                                </ul>
                                <div className="paragraphSeparator" />
                            </div>
                            <div className="divider" />
                            <div />
                            <div id="SupportPage_HowCanIHelp_Give">
                                <div className="SupportPage_HowCanIHelp_SubHeader">
                                    Give
                                </div>
                                <div className="SupportPage_HowCanIHelp_SubDescription">
                                    We also need supporters who are able to partner with us financially.
                                </div>
                                <div id="SupportPage_GiveSection">
                                    <div id="SupportPage_TripCost" className="SupportPage_HowCanIHelp_SubDescription">
                                        <div><b>Total trip cost: $4,754</b></div>
                                    </div>
                                    <div className="SupportPage_HowCanIHelp_SubDescription">
                                        <b>Mail checks to:</b>
                                        <div className="MailingAddress">
                                            Beyond, PO Box 831539,
                                            Richardson, TX 75083
                                        </div>
                                    </div>
                                </div>
                                <div className="SupportPage_HowCanIHelp_SubDescription">
                                    Please make all checks out to <b>Beyond</b> with a memo of <b>SAR1801</b>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        );
    }
}