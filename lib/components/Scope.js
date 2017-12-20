import React from 'react';
import ScopedComponent from '../utils/ScopedComponent';
import PropTypes from 'prop-types';

class Scope extends ScopedComponent {

    static childContextTypes = {
        rebindScope: PropTypes.any
    };

    getChildContext() {
        return { rebindScope: this.scope };
    }

    render() {
        return (
            <React.Fragment>
              {this.props.children}
            </React.Fragment>
        );
    }
}

export default Scope;
