import React from 'react';
import ScopedComponent from '../utils/ScopedComponent';

class Property extends ScopedComponent {
    render() {
        return React.cloneElement(
            React.Children.only(this.props.children), {[this.props.name]: this.scope}
        );
    }
}

export default Property;
