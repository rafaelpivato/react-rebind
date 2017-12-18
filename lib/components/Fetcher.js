import React, { Component } from 'react';

class Fetcher extends Component {

    render() {
        return (
            <React.Fragment>
              {this.props.children}
            </React.Fragment>
        );
    }
}

export default Fetcher;
