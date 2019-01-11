import * as React from 'react';

export class BlogTileContainer extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div id="BlogTileContainer">
                {this.props.children}
            </div>
        );
    }
}