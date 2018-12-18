import * as React from 'react';

export class EntryParagraph extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="EntryParagraph">
                {this.props.children}
            </div>
        );
    }
}