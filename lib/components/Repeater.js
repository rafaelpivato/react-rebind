import React, { Component } from 'react';

class Repeater extends Component {

    render() {
        return React.Children.only(this.props.children);
    }
}

export default Repeater;
