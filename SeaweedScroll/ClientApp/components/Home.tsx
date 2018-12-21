import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Banner } from './Banner';
import { BlogEntry } from './BlogEntry/BlogEntry';
import { NavLink, Link } from 'react-router-dom';

export default class Home extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return (
            <NavLink to={'/Adventures'} activeClassName='active'>
                <span className='glyphicon glyphicon-th-list'></span> Adventures
            </NavLink>
        );
    }
}