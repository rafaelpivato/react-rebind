import React, { Component } from 'react';

class Text extends Component {

    render() {
        return React.Children.only(this.props.children);
    }
}

export default Text;
