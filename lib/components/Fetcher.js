import React, { Component } from 'react';

class Fetcher extends Component {

    render() {
        return React.Children.only(this.props.children);
    }
}

export default Fetcher;
