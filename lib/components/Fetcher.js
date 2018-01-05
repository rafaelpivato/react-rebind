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
        this.fetchData(this.props, this.context);
    }

    propsDiffer(a, b) {
        return (a.root !== b.root) || (a.endpoint !== b.endpoint) || (a.query !== b.query);
    }

    componentWillReceiveProps(nextProps, nextContext) {
        if (this.propsDiffer(this.props, nextProps)) {
            this.fetchData(nextProps, nextContext);
        }
    }

    fetchData(props, context) {
        fetch(this.getUrlPath(props))
            .then((response) => response.json())
            .then((json) => context.rebind.triggerAction('updateAllResources', props.endpoint, json))
            .catch((ex) => console.log('parsing failed', ex));
    }

    getUrlPath(props) {
        return `${props.root}${props.endpoint}/${props.query}`;
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
