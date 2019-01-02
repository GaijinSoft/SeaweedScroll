import * as React from 'react';
import { BannerImage } from './BannerImage';
import { Title } from './Title';
import { EntryInfo } from './EntryInfo';
import { EntryContent } from './EntryContent';
import { EntryParagraph } from './EntryParagraph';
import { EntryPhoto } from './EntryPhoto';
import { NavLink, Link } from 'react-router-dom';
import { Banner } from '../Banner';

const img = require('../../images/ball-blur-bokeh-717988.jpg');

export class BlogEntry extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div id="BlogEntry">
                <Banner />
                {this.props.children}
            </div>
        );
    }
}