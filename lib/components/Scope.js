import React from 'react';
import ScopedComponent from '../utils/ScopedComponent';
import PropTypes from 'prop-types';

class Scope extends ScopedComponent {

    static childContextTypes = {
        rebindContext: PropTypes.any
    };

    getChildContext() {
        return {
            rebindContext: this.getChildRebindContext()
        };
    }

    getChildRebindContext() {
        const rebindContext = Object.assign(
            {},
            this.context.rebindContext,
            { scope: this.scope }
        );
        if (this.props.mark !== undefined && this.props.mark !== null) {
            rebindContext.marks = Object.assign(
                {},
                rebindContext.marks,
                { [this.props.mark]: { scope: this.scope, marks: this.context.rebindContext } }
            );
        }
        if (rebindContext === undefined || rebindContext.scope === undefined) debugger;
        return rebindContext;
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
