import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { connect } from 'react-redux';
import { ApplicationState } from '../../store';
import { BlogEntry } from './BlogEntry';
import * as EntryState from '../../store/BlogInfo';

// At runtime, Redux will merge together...
type BlogInfoProps =
    EntryState.EntryState                          // ... state we've requested from the Redux store
    & typeof EntryState.actionCreators              // ... plus action creators we've requested
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
        if (this.props && this.props.entries && this.props.entries.length > 0)
            return <BlogEntry>{this.props.entries[0].blogJsx}</BlogEntry>;
        else
            return <div>Sorry dude</div>;
    }
}

export default connect(
        (state: ApplicationState) => state.blogEntry,        // Selects which state properties are merged into the component's props
        EntryState.actionCreators                            // Selects which action creators are merged into the component's props
)(GetBlogEntry) as typeof GetBlogEntry;