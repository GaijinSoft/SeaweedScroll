import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Banner } from './Banner';

export default class NotFound extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <div>
                Not Found! 404!
            </div>
        );
    }
}