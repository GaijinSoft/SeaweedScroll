import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Banner } from './Banner';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
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
                    </div>
                </div>
            </div>
        );
    }
}