import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Event extends Component {

    static contextTypes = {
        rebind: PropTypes.object
    };

    static defaultProps = {
        args: []
    };

    handler = () => {
        const { rebind } = this.context;
        const { action, args } = this.props;
        rebind.triggerAction(action, ...args);
    }

    render() {
        const { name } = this.props;
        return React.cloneElement(
            React.Children.only(this.props.children),
            { [name]: this.handler }
        );
    }
}

export default Event;
