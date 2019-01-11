import * as React from 'react';
import { Image } from '../Image';

export class TileImage extends Image {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <div className="TileImage">
                <Image src={ this.props.src } />
            </div>
        );
    }
}