import * as React from 'react';
import { NavLink } from 'react-router-dom';

export class Banner extends React.Component {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div id="banner">
                <NavLink className="navbarLink" to="/Support">Support</NavLink>
                <NavLink className="navbarLink" to="/Adventures">Story</NavLink>
            </div>
        );
    }
}