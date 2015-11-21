import React, { Component, PropTypes } from 'react';
import { Route, Router, IndexRoute } from 'react-router';
import App from './app';
import history from '../utils/history';
import Profile from './profile';
import Post from '../containers/post';
import Login from '../components/login';
import Create from '../containers/create';
import Next from '../containers/next';
import Likes from '../containers/likes';
import Top from './top';
import { getProfile, getProfilePosts } from '../actions/profile';
import { fetchTop } from '../actions/top';
import { fetchLikes } from '../actions/likes';
import { fetchPost } from '../actions/post';

import isAuthenticated from './auth';

import { autobind } from 'core-decorators';

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

    @autobind
    handleProfile(nextState) {
        this.props.dispatch(getProfile(nextState.params.id));
        this.props.dispatch(getProfilePosts(nextState.params.id));
    }

    @autobind
    handleTop() {
        this.props.dispatch(fetchTop());
    }

    @autobind
    handleLikes() {
        this.props.dispatch(fetchLikes());
    }

    @autobind
    handlePost(nextState) {
        this.props.dispatch(fetchPost(nextState.params.id));
    }

    render() {
        return (
            <div>
                <Router history={ history } >
                    <Route path="/" component={ App } >
                        <IndexRoute
                            component={isAuthenticated(Next) } />
                        <Route
                            path="profile"
                            component={ isAuthenticated(Profile) }
                            onEnter={ this.handleProfile } />
                        <Route
                            path="profile/:id"
                            component={ Profile }
                            onEnter={ this.handleProfile } />
                        <Route
                            path="create"
                            component={ isAuthenticated(Create) } />
                        <Route
                            path="top"
                            component={ isAuthenticated(Top) }
                            onEnter={ this.handleTop } />
                        <Route
                            path="likes"
                            component={ isAuthenticated(Likes) }
                            onEnter={ this.handleLikes } />
                        <Route
                            path="recomendation/:id"
                            component={ Post }
                            onEnter={ this.handlePost } />
                        <Route
                            path="login"
                            component={ Login } />
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
