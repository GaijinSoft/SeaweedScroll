import * as React from 'react';
import { Image } from '../Image';
import { Link } from 'react-router-dom';

export class TileImage extends Image {
    constructor(props: any) {
        super(props);
    }

    render() {
        const defaultHeight = "25vw";
        const height = this.props.height;
        const styles = {
            'height': `${height || defaultHeight}`
        };
        const linkStyles = {
            'display': 'block',
            'width': '100%',
            'height': '100%'
        };
        const linkTo = `/Adventures/${this.props.dateId}`;
        return (
            <div className="TileImage">
                <Image src={this.props.src} styles={styles}>
                    <Link to={linkTo} style={linkStyles} />
                </Image>
            </div>
        );
    }
}