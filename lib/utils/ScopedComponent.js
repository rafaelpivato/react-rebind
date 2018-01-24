import { Component } from 'react';
import PropTypes from 'prop-types';
import objectPath from 'object-path';

class ScopedComponent extends Component {

    static contextTypes = {
        rebindScope: PropTypes.any
    };

    getScope(path) {
        return objectPath.get(this.context.rebindScope, path);
    }

    get scope() {
        return objectPath.get(this.context.rebindScope, this.props.scope);
    }
}

export default ScopedComponent;
