import React, { Component } from 'react';

class Store extends Component {

    constructor(props) {
        super(props);
        this.state = {
            store: {}
        };
    }

    getChildContext() {
        return {
            rebind: {
                store: this.state.store
            }
        };
    }

    render() {
        return React.Children.only(this.props.children);
    }
}

export default Store;
