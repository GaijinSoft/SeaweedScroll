import * as React from 'react';

export class TileTitle extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    goToBlogEntry() {
        this.context.router.transitionTo(`/Support`);
    }

    render() {
        return (
            <div className="TileTitle" onClick={this.goToBlogEntry}>
                { this.props.children }
            </div>
        );
    }
}