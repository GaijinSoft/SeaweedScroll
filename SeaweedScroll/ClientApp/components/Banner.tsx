import * as React from 'react'; 

export class Banner extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div id="banner">
                <div id="mascotPicture" className="fullRowImg" />
                <div id="websiteTitle">Seaweed Scroll</div>
                <div id="vision" className="bannerItem">Vision</div>
                <div id="journey" className="bannerItem">Journey</div>
                <div id="partner" className="bannerItem">Partner</div>
                <div id="art" className="bannerItem">Art</div>
                <div id="contact" className="bannerItem">Contact</div>
            </div>
        );
    }
}