import React from 'react';
import ScopedComponent from '../utils/ScopedComponent';

class Property extends ScopedComponent {
    getChildProps(props) {
        const childProps = {};
        for (const [name, path] of Object.entries(props)) {
            childProps[name] = this.getScope(path);
        };
        return childProps;
    }

    render() {
        return React.cloneElement(
            React.Children.only(this.props.children),
            this.getChildProps(this.props)
        );
    }
}

export default Property;
