import React, { Component } from 'react';

class DataFetcher extends Component {

    render() {
        return React.Children.only(this.props.children);
    }
}

export default DataFetcher;
