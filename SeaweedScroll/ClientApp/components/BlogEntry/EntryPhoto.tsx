import * as React from 'react';
import { Image } from '../Image';

export class EntryPhoto extends Image {
    constructor(props: any) {
        super(props);
    }

    render() {
        const defaultHeight = "25vw";
        const height = this.props.height; //document.documentElement.clientWidth < 767 ? this.props.cellHeight : this.props.height;
        const styles = {
            'height': `${height || defaultHeight}`
        };
        return (
            <div className="EntryPhotoContainer">
                <Image styleName="centeredEntryData" src={this.props.src} styles={styles} />
                <div className="captionText">{this.props.caption}</div>
            </div>
        );
    }
}