import React, { Component, PropTypes } from 'react';
import Login from '../components/login';

import { connect } from 'react-redux';

export default function(Children) {
    class Auth extends Component {
        constructor(props) {
            super(props);
        }

        render() {
            return (
                <div>
                    {this.props.auth.isAuthenticated ? <Children /> : <Login />}
                </div>
            );
        }
    }

    function select(state) {
        return {
            auth: state.auth,
        };
    }

    return connect(select)(Auth);
}
