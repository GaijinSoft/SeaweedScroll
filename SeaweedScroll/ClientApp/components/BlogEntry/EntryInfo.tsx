import * as React from 'react';

export class EntryInfo extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div id="EntryInfo" className="centeredEntryData">
                {this.props.stringDate}
            </div>
        );
    }
}