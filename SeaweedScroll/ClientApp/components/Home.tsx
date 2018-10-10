import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Banner } from './Banner';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div>
                <Banner />
                <div id="HomeContent">
                    <div id="SeaweedScroll" className="fullRowImg inspirationRow">Our Story</div>
                    <div id="Vision" className="fullRowImg inspirationRow">Vision</div>
                    <div id="Journey" className="fullRowImg inspirationRow">Journey</div>
                    <div id="Partner" className="fullRowImg inspirationRow">Partner</div>
                    <div id="Art" className="fullRowImg inspirationRow">Art</div>
                    <div id="Contact" className="fullRowImg inspirationRow">Contact</div>
                </div>
            </div>
        );
    }
}
