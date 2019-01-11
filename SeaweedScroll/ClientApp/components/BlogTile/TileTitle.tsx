import * as React from 'react';

export class TileTitle extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="TileTitle">
                { this.props.children }
            </div>
        );
    }
}