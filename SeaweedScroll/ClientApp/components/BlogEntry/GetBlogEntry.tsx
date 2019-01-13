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
import { BlogTileContainer } from '../BlogTile/BlogTileContainer';
import { BlogTile } from '../BlogTile/BlogTile';
import { TileImage } from '../BlogTile/TileImage';
import { TileTitle } from '../BlogTile/TileTitle';

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

    componentDidMount() {
        window.scrollTo(0, 0);
    }

    componentWillReceiveProps(nextProps: BlogInfoProps) {
        window.scrollTo(0, 0);
        // This method runs when incoming props (e.g., route params) change
        let entryDateId = parseInt(this.props.match.params.entryDateId) || 0;
        this.props.requestBlogEntry(entryDateId);
    }

    private GetSelectedEntry(): IEntryState.IEntry | null {
        var entryDateId = parseInt(this.props.match.params.entryDateId) || 0;
        if (entryDateId === 0)
            return this.props.entries[0];
        else {
            var entries = this.props.entries;
            for (var i = 0; i < entries.length; ++i) {
                if (entries[i].id === entryDateId)
                    return entries[i];
            }
        }
        return null;
    }

    private GetEntriesWithoutSelectedEntry(): IEntryState.IEntry[] {
        var entries = this.props.entries.slice(0);
        var entryDateId = parseInt(this.props.match.params.entryDateId) || 0;
        entryDateId = entryDateId === 0 ? entries[0].id : entryDateId;
        for (var i = 0; i < entries.length; ++i) {
            if (entries[i].id === entryDateId) {
                entries.splice(i, 1);
                return entries;
            }
        }
        return [];
    }

    private SomethingWentWrong() {
        return <div>Something went wrong. No blog entry found!</div>;
    }

    private RenderSelectedEntry(entry: IEntryState.IEntry) {
        var bannerImg = require(`../../images/${entry.bannerImageFileName}`);
        var entryContents = entry.entryContentContainer.entryContents;
        var entryContentList = [];
        for (var i = 0; i < entryContents.length; ++i) {
            if (entryContents[i].type === "EntryParagraph")
                entryContentList.push(<EntryParagraph>{(entryContents[i] as IEntryParagraph).text}</EntryParagraph>);
            else { // if (entryContents[i].type === "EntryPhoto")
                var entryPhoto = (entryContents[i] as IEntryPhoto);
                const src = require(`../../images/${entryPhoto.fileName}`);
                entryContentList.push(<EntryPhoto src={src} caption={entryPhoto.caption} height={entryPhoto.height}/>);
            }
        }
        return (
            <BlogEntry>
                <BannerImage src={bannerImg}/>
                <Title>{entry.title}</Title>
                <EntryInfo stringDate={entry.stringDate}/>
                <hr id="titleSeparator"/>
                <EntryContent>
                    {entryContentList}
                </EntryContent>
            </BlogEntry>
        );
    }

    private RenderOtherEntryTiles() {
        var entries = this.GetEntriesWithoutSelectedEntry();
        var tileList = [];
        if (entries.length === 0)
            return;
        for (var i = 0; i < entries.length; ++i) {
            var bannerImg = require(`../../images/${entries[i].bannerImageFileName}`);
            tileList.push(
                <BlogTile dateId={entries[i].id}>
                    <TileTitle dateId={entries[i].id}>{entries[i].title}</TileTitle>
                    <TileImage dateId={entries[i].id} src={bannerImg} />
                </BlogTile>
            );
        }
        if (tileList.length > 0) {
            return (
                <BlogTileContainer>
                    {tileList}
                </BlogTileContainer>
            );
        }
    }

    public render() {
        // Fetch selected entry, handle null cases
        if (!this.props || !this.props.entries || this.props.entries.length < 1)
            return this.SomethingWentWrong();
        var entry = this.GetSelectedEntry();
        if (entry == null)
            return this.SomethingWentWrong();

        return (
            <div>
                {this.RenderSelectedEntry(entry)}
                {this.RenderOtherEntryTiles()}
            </div>
        );
    }
}

export default connect(
        (state: ApplicationState) => state.blogEntry,        // Selects which state properties are merged into the component's props
        IEntryState.actionCreators                            // Selects which action creators are merged into the component's props
)(GetBlogEntry) as typeof GetBlogEntry;