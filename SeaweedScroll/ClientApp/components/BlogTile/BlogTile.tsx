import * as React from 'react';

export class BlogTile extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="BlogTile">
                {this.props.children}
            </div>
        );
    }
}