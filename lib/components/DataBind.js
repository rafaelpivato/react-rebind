import React, { Component } from 'react';

class DataBind extends Component {

    render() {
        return React.Children.only(this.props.children);
    }
}

export default DataBind;
