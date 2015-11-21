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
import * as profileActions from '../actions/profile';

import isAuthenticated from './auth';

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
        this.handleProfile = this.handleProfile.bind(this);
    }

    handleProfile(nextState, replaceState) {
        this.props.dispatch(profileActions.getProfile(nextState.params.id));
        this.props.dispatch(profileActions.getProfilePosts(nextState.params.id));
    }

    render() {
        return (
            <div>
                <Router history={ history } >
                    <Route path="/" component={ App } >
                        <IndexRoute component={isAuthenticated(Next) } />
                        <Route path="profile" component={ isAuthenticated(Profile) } onEnter={ this.handleProfile } />
                        <Route path="profile/:id" component={ Profile } onEnter={ this.handleProfile } />
                        <Route path="create" component={ isAuthenticated(Create) } />
                        <Route path="top" component={ isAuthenticated(Top) } />
                        <Route path="likes" component={ isAuthenticated(Likes) } />
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
