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
                </div>
            </div>
        );
    }
}