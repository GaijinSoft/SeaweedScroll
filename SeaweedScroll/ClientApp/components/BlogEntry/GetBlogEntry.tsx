import * as React from 'react';
import { BannerImage } from './BannerImage';
import { Title } from './Title';
import { EntryInfo } from './EntryInfo';
import { EntryContent } from './EntryContent';
import { EntryParagraph } from './EntryParagraph';
import { EntryPhoto } from './EntryPhoto';
import { NavLink, Link } from 'react-router-dom';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { BlogEntry } from './BlogEntry';
import * as IEntryState from '../../store/BlogInfo';
import {IEntryContentContainer, IEntryParagraph, IEntryPhoto} from '../../store/BlogInfo';

// At runtime, Redux will merge together...
type BlogInfoProps =
    IEntryState.IEntryState                          // ... state we've requested from the Redux store
    & typeof IEntryState.actionCreators              // ... plus action creators we've requested
    & RouteComponentProps<{ entryDateId: string }>; // ... plus incoming routing parameters

class GetBlogEntry extends React.Component<BlogInfoProps, {}> {
    componentWillMount() {
        // This method runs when the component is first added to the page
        let entryDateId = parseInt(this.props.match.params.entryDateId) || 0;
        this.props.requestBlogEntry(entryDateId);
    }

    componentWillReceiveProps(nextProps: BlogInfoProps) {
        // This method runs when incoming props (e.g., route params) change
        let entryDateId = parseInt(this.props.match.params.entryDateId) || 0;
        this.props.requestBlogEntry(entryDateId);
    }

    public render() {
        if (this.props && this.props.entries && this.props.entries.length > 0) {
            var entry = this.props.entries[0];
            var entryContents = entry.entryContentContainer.entryContents;
            //var entryContentList = [];
            //for (var i = 0; i < entryContents.length; ++i) {
            //    if (entryContents[i].Type === "EntryParagraph")
            //        entryContentList.push(<EntryParagraph (entryContents[i] as EntryParagraph).text
            //}
            return (
                <BlogEntry>
                    <BannerImage src={entry.bannerImagePartialPath} />
                    <Title>{entry.title}</Title>
                    <EntryInfo stringDate={entry.stringDate} />
                    <hr id="titleSeparator" />
                    <EntryContent>
                        <EntryParagraph>
                            {(entryContents[0] as IEntryParagraph).text}
                        </EntryParagraph>
                        <EntryParagraph>
                            {(entryContents[1] as IEntryParagraph).text}
                        </EntryParagraph>
                        <EntryPhoto src={(entryContents[2] as IEntryPhoto).partialPath} caption={(entryContents[2] as IEntryPhoto).caption} />
                    </EntryContent>
                </BlogEntry>
            );
        }
        else
            return <div>Sorry dude</div>;
    }
}

export default connect(
        (state: ApplicationState) => state.blogEntry,        // Selects which state properties are merged into the component's props
        IEntryState.actionCreators                            // Selects which action creators are merged into the component's props
)(GetBlogEntry) as typeof GetBlogEntry;