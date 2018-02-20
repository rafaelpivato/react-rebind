import React from 'react';
import objectPath from 'object-path';

import ScopedComponent from '../utils/ScopedComponent';
import Scope from './Scope';

class Repeater extends ScopedComponent {

    static defaultProps = {
        mark: 'repeater',
        keyPath: 'id'
    };

    cloneChildren(item) {
        return React.Children.map(this.props.children, (child, index) => {
            if (child !== null && child!== undefined) {
                return React.cloneElement(child, {key: index});
            } else {
                return child;
            }
        });
    }

    renderRepetitions() {
        const mark = `${this.props.mark}Current`;
        return this.scope.map(
            (item, index) => {
                const key = objectPath.get(item, this.props.keyPath) || index;
                return (
                    <Scope key={key} scope={index} mark={mark}>
                      {this.cloneChildren(item)}
                    </Scope>
                );
            }
        );
    }

    render() {
        const repetitions = this.renderRepetitions();
        return (<Scope {...this.props}>{repetitions}</Scope>);
    }
}

export default Repeater;
