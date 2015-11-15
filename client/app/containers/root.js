import React, { Component, PropTypes } from 'react';
import {Route, Router, IndexRoute} from 'react-router';
import App from './app';
import history from '../utils/history';
import Profile from './profile';
import Post from '../containers/post';
import Login from '../components/login';
import Create from '../containers/create';
import Next from '../containers/next';
import Likes from '../containers/likes';
import Top from './top';

import { connect } from 'react-redux';

const EmptyComponent = () => {
    return <div />;
};

class Root extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        auth: PropTypes.object,
    }

    constructor(props) {
        super(props);
    }

    requireAuth(nextState, replaceState) {
        if (!this.props.auth.isAuthenticated) {
            replaceState(null, '/login');
        }
    }

    render() {
        return (
            <div>
                <Router history={ history } >
                    <Route path="/" component={ App } >
                        <IndexRoute component={ Next } onEnter={ this.requireAuth.bind(this) } />
                        <Route path="profile" component={ Profile } onEnter={ this.requireAuth.bind(this) } />
                        <Route path="profile/:id" component={ Profile } />
                        <Route path="create" component={ Create } onEnter={ this.requireAuth.bind(this) } />
                        <Route path="top" component={ Top } onEnter={ this.requireAuth.bind(this) } />
                        <Route path="likes" component={ Likes } onEnter={ this.requireAuth.bind(this) } />
                        <Route path="recomendation/:id" component={ Post } />
                        <Route path="login" component={ Login } />
                    </Route>
                </Router>
            </div>
        );
    }
}

function select(state) {
    return {
        auth: state.auth,
    };
}

export default connect(select)(Root);
