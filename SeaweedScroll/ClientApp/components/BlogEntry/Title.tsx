import * as React from 'react';

export class Title extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div id="Title" className="centeredEntryData">
                {this.props.children}
            </div>
        );
    }
}