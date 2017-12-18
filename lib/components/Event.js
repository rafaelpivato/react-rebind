import React, { Component } from 'react';

class Event extends Component {

    render() {
        return React.Children.only(this.props.children);
    }
}

export default Event;
