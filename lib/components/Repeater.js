import React, { Component } from 'react';
import PropTypes from 'prop-types';
import objectPath from 'object-path';

class Repeater extends Component {

    static contextTypes = {
        rebind: PropTypes.object
    };

    repeatChildren(item) {
        return React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(
                child,
                {key: index, scope: item}
            );
        });
    }

    renderRows() {
        const store = this.context.rebind.store;
        return objectPath.get(store, this.props.scope).map((item) => {
            return this.repeatChildren(item);
        });
    }

    render() {
        return (
            <React.Fragment>
              {this.renderRows()}
            </React.Fragment>
        );
    }
}

export default Repeater;
