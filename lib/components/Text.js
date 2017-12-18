import React, { Component } from 'react';

class Text extends Component {

    render() {
        return (
            <span>Text of {this.props.scope}</span>
        );
    }
}

export default Text;
