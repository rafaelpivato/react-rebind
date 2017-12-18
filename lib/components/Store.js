import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Store extends Component {

    constructor(props) {
        super(props);
        const store =  (this.props.initial === null)? {} : this.props.initial;
        this.state = {
            store: store
        };
        console.info('Store initialized', store);
    }

    static childContextTypes = {
        rebind: PropTypes.object
    };

    static defaultProps = {
        initial: null
    };

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
