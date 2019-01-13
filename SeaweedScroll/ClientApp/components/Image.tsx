import * as React from 'react';

export class Image extends React.Component<any, any> {
    constructor(props: any) {
        super(props);
    }

    render() {
        const styles = {
            'background-image': `url("${this.props.src}")`,
            'background-repeat': 'no-repeat',
            'background-position': 'center',
            'background-size': 'contain'
    };
        return (
            <div style={Object.assign({}, styles, this.props.styles)} id={this.props.identifier} className={this.props.styleName}>
                {this.props.children}
            </div>
        );
    }
}