import React from 'react';
import {Route, Router, IndexRoute} from 'react-router';
import CreateRecomendation from './createRecomendation';
import App from './app';
import Recommendation from './recommendation';
import createBrowserHistory from 'history/lib/createBrowserHistory';

const EmptyComponent = (props) => {
    return <div />;
};

export const Root = () => {
    return (
        <div>
            <Router history={ createBrowserHistory() } >
                <Route path="/" component={ App } >
                    <IndexRoute component={ Recommendation } />
                    <Route path="create" component={ CreateRecomendation } />
                    <Route path="top" component={ EmptyComponent } />
                    <Route path="likes" component={ EmptyComponent } />
                </Route>
            </Router>
        </div>
    );
};
