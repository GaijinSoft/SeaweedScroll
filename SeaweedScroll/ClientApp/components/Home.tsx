import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Banner } from './Banner';
import { BlogEntry } from './BlogEntry/BlogEntry';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <BlogEntry></BlogEntry>
        );
    }
}