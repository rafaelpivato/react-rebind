import React from 'react';
import ScopedComponent from '../utils/ScopedComponent';

class Number extends ScopedComponent {
    render() {
        return (
            <span>{this.scope}</span>
        );
    }
}

export default Number;
