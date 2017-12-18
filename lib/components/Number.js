import React, { Component } from 'react';

class Number extends Component {

    render() {
        return React.Children.only(this.props.children);
    }
}

export default Number;
