import React, { Component } from 'react';
import PropTypes from 'prop-types';

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
        return this.context.rebind.store[this.props.scope].map((item) => {
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
