import { Component } from 'react';
import PropTypes from 'prop-types';
import objectPath from 'object-path';

class ScopedComponent extends Component {

    static contextTypes = {
        rebindContext: PropTypes.any
    };

    getRebindContext(markPath) {
        const marks = markPath === null? [] : markPath.split('.');
        return marks.reduce((current, name) => {
            return current.marks[name];
        }, this.context.rebindContext);
    }

    parsePath(path) {
        const pathString = path.toString();
        const sepIdx = pathString.indexOf(':');
        if (sepIdx > -1) {
            return {
                scope: pathString.slice(sepIdx + 1),
                mark: pathString.slice(0, sepIdx)
            };
        } else {
            return {
                scope: pathString,
                mark: null
            };
        }
    }

    getScope(path) {
        const parsedPath = this.parsePath(path);
        const rebindContext = this.getRebindContext(parsedPath.mark);
        const result = objectPath.get(rebindContext.scope, parsedPath.scope);
        const filtered = this.props.filter? this.props.filter(result) : result;
        return filtered;
    }

    get scope() {
        return this.getScope(this.props.scope);
    }
}

export default ScopedComponent;
