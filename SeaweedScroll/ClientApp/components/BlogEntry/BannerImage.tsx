import * as React from 'react';
import { Image } from '../Image';

export class BannerImage extends Image {
    constructor(props: any) {
        super(props);
    }

    render() {
        return (
            <Image identifier="BannerImg" src={this.props.src} />
        );
    }
}