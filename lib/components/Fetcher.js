import React, { Component } from 'react';
import PropTypes from 'prop-types';

const fetch = window.fetch;

class Fetcher extends Component {

    static contextTypes = {
        rebind: PropTypes.object
    };

    static defaultProps = {
        query: ''
    };

    componentDidMount() {
        fetch(this.urlPath)
            .then((response) => response.json())
            .then((json) => this.context.rebind.triggerAction('updateAllResources', this.props.endpoint, json))
            .catch((ex) => console.log('parsing failed', ex));
    }

    get urlPath() {
        return `${this.props.root}${this.props.endpoint}/${this.props.query}`;
    }

    render() {
        return (
            <React.Fragment>
              {this.props.children}
            </React.Fragment>
        );
    }
}

export default Fetcher;
