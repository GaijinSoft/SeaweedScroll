import * as React from 'react';
import { BannerImage } from './BannerImage';
import { Title } from './Title';
import { EntryInfo } from './EntryInfo';
import { EntryContent } from './EntryContent';
import { EntryParagraph } from './EntryParagraph';
import { EntryPhoto } from './EntryPhoto';
import { NavLink, Link } from 'react-router-dom';

const img = require('../../images/ball-blur-bokeh-717988.jpg');

export class BlogEntry extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div id="BlogEntry">
                <BannerImage src={img} />
                <Title>
                    Christmas Update
                    <NavLink to={ '/Adventures' } activeClassName='active'>
                        <span className='glyphicon glyphicon-th-list'></span> Adventures
                    </NavLink>
                    <NavLink to={'/fetchdata'} activeClassName='active'>
                        <span className='glyphicon glyphicon-th-list'></span> Fetch data
                    </NavLink>
                </Title>
                <EntryInfo stringDate="December 16, 2018" />
                <hr id="titleSeparator" />
                <EntryContent>
                    <EntryParagraph>
                        We've done a lot this year
                    </EntryParagraph>
                    <EntryParagraph>
                        It's been a lot of fun
                    </EntryParagraph>
                    <EntryPhoto src={img} caption="A photo of our favorite place" />
                </EntryContent>
            </div>
        );
    }
}