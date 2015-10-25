import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as authActions from '../actions/auth';

function select(state) {
    return state;
}

class Auth extends Component {
    componentWillMount() {
        localStorage.setItem('token', this.props.params.token);
        this.props.dispatch(authActions.getUserinfo());
        location.hash = '#';
    }

    render() {
        return (< div />);
    }
}

export default connect(select)(Auth);
