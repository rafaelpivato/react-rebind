import { Component } from 'react';
import PropTypes from 'prop-types';

class Action extends Component {

    static contextTypes = {
        rebind: PropTypes.object
    };

    componentDidMount() {
        this.context.rebind.registerAction(this.props.name, this.props.onTrigger);
    }

    render() {
        return null;
    }
}

export default Action;
