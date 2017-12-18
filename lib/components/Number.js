import React, { Component } from 'react';

class Number extends Component {

    render() {
        return (
            <span>Number of {this.props.scope}</span>
        );
    }
}

export default Number;
