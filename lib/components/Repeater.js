import React from 'react';
import ScopedComponent from '../utils/ScopedComponent';

class Repeater extends ScopedComponent {

    cloneChildren(item) {
        return React.Children.map(this.props.children, (child, index) => {
            return React.cloneElement(
                child,
                {key: index, scope: item}
            );
        });
    }

    renderRepetitions() {
        return this.scope.map((item) => {
            return this.cloneChildren(item);
        });
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
