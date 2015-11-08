import React from 'react';
import {Route, Router, IndexRoute} from 'react-router';
import CreateRecomendation from './createRecomendation';
import App from './app';
import Recommendation from './recommendation';
import history from '../utils/history';
import Profile from './profile';
import Post from '../containers/post';
import Login from '../components/login';

const EmptyComponent = () => {
    return <div />;
};

export const Root = () => {
    return (
        <div>
            <Router history={ history } >
                <Route path="/" component={ App } >
                    <IndexRoute component={ Recommendation } />
                    <Route path="profile" component={ Profile } />
                    <Route path="profile/:id" component={ Profile } />
                    <Route path="create" component={ CreateRecomendation } />
                    <Route path="top" component={ EmptyComponent } />
                    <Route path="likes" component={ EmptyComponent } />
                    <Route path="recomendation/:id" component={ Post } />
                    <Route path="login" component={ Login } />
                </Route>
            </Router>
        </div>
    );
};
