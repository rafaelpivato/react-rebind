import React from 'react';

import ScopedComponent from '../utils/ScopedComponent';
import Scope from './Scope';

class Repeater extends ScopedComponent {

    static defaultProps = {
        mark: 'repeater'
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
            (item, index) => (
                <Scope key={index} scope={index} mark={mark}>
                  {this.cloneChildren(item)}
                </Scope>
            )
        );
    }

    render() {
        const repetitions = this.renderRepetitions();
        return (<Scope {...this.props}>{repetitions}</Scope>);
    }
}

export default Repeater;
