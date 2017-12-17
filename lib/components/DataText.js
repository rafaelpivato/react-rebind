import React, { Component } from 'react';

class DataText extends Component {

    render() {
        return React.Children.only(this.props.children);
    }
}

export default DataText;
