import * as React from 'react';
import { Image } from '../Image';

export class EntryPhoto extends Image {
    constructor(props: any) {
        super(props);
    }

    render() {
        const defaultHeight = "800px";
        const defaultWidth = "800px";
        const styles = {
            'height': `${this.props.height || defaultHeight}`
            //'width': `${this.props.width || defaultWidth}`
        }
        return (
            <div className="EntryPhotoContainer">
                <Image styleName="centeredEntryData" src={this.props.src} styles={styles} />
                <div className="captionText">{this.props.caption}</div>
            </div>
        );
    }
}