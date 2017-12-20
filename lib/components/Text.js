import React from 'react';
import ScopedComponent from '../utils/ScopedComponent';

class Text extends ScopedComponent {
    render() {
        return (
            <span>{this.scope}</span>
        );
    }
}

export default Text;

