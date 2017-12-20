import React from 'react';
import PropTypes from 'prop-types';

import ScopedComponent from '../utils/ScopedComponent';
import Scope from './Scope';

class Repeater extends ScopedComponent {

    static childContextTypes = {
        rebindScope: PropTypes.any
    };

    getChildContext() {
        return { rebindScope: this.scope };
    }

    cloneChildren(item) {
        return React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(child, {key: index});
        });
    }

    renderRepetitions() {
        return this.scope.map(
            (item, index) => (
                <Scope key={index} scope={index}>
                  {this.cloneChildren(item)}
                </Scope>
            )
        );
    }

    render() {
        return (
            <React.Fragment>
              {this.renderRepetitions()}
            </React.Fragment>
        );
    }
}

export default Repeater;
