import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Action from './Action';

class Store extends Component {

    static childContextTypes = {
        rebind: PropTypes.object
    };

    static defaultProps = {
        initial: null
    };

    constructor(props) {
        super(props);
        const store =  (this.props.initial === null)? {} : this.props.initial;
        this.state = {
            store: store,
            actions: {}
        };
    }

    get triggerActionHandler() {
        return (name, ...args) => {
            const action = this.state.actions[name];
            const result = action(this.state.store, ...args);
            this.setState({store: result});
        };
    }

    get registerActionHandler() {
        return (name, handler) => {
            const actions = Object.assign(this.state.actions, {[name]: handler});
            this.setState({actions});
        };
    }

    get updateAllResourcesHandler() {
        return (store, resourceName, data)  => {
            const resources = Object.assign(store.resources, { [resourceName]: data });
            const updated = Object.assign(store, { resources });
            return updated;
        };
    }

    getChildContext() {
        return {
            rebind: {
                store: this.state.store,
                triggerAction: this.triggerActionHandler,
                registerAction: this.registerActionHandler
            }
        };
    }

    render() {
        return (
            <React.Fragment>
              <Action name="updateAllResources" onTrigger={this.updateAllResourcesHandler} />
              {this.props.children}
            </React.Fragment>
        );
    }
}

export default Store;
