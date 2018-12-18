import * as React from 'react';
import { EntryParagraph } from './EntryParagraph';

export class EntryContent extends React.Component<any,any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div id="EntryContent">
                {this.props.children}
            </div>
        );
    }
}