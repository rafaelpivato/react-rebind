import React, { Component } from 'react';
import PropTypes from 'prop-types';

import Action from './Action';

class Store extends Component {

    static childContextTypes = {
        rebind: PropTypes.object,
        rebindScope: PropTypes.any
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

    getChildContext() {
        return {
            rebind: {
                store: this.state.store,
                triggerAction: this.triggerActionHandler,
                registerAction: this.registerActionHandler
            },
            rebindScope: this.state.store
        };
    }

    get triggerActionHandler() {
        return (name, ...args) => {
            const action = this.state.actions[name];
            if (action === undefined) {
                console.warn("Unknown action", name);
            } else {
                const result = action(this.state.store, this.triggerActionHandler, ...args);
                this.setState({store: result});
            }
        };
    }

    get registerActionHandler() {
        return (name, handler) => {
            const actions = Object.assign(this.state.actions, {[name]: handler});
            this.setState({actions});
        };
    }

    get updateAllResourcesHandler() {
        return (store, trigger, resourceName, data)  => {
            const resources = Object.assign(store.resources, { [resourceName]: data });
            const updated = Object.assign(store, { resources });
            return updated;
        };
    }

    get updateResourceHandler() {
        return (store, trigger, resourceName, data)  => {
            const results = store.resources[resourceName].results.map((element) => {
                return element.id === data.id? data : element;
            });
            const resource = Object.assign(store.resources[resourceName], { results });
            const resources = Object.assign(store.resources, { [resourceName]: resource });
            const updated = Object.assign(store, { resources });
            return updated;
        };
    }

    render() {
        return (
            <React.Fragment>
              <Action name="updateAllResources" onTrigger={this.updateAllResourcesHandler} />
              <Action name="updateResource" onTrigger={this.updateResourceHandler} />
              {this.props.children}
            </React.Fragment>
        );
    }
}

export default Store;
