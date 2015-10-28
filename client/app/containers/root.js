import React from 'react';
import {Route, Router, IndexRoute} from 'react-router';
import CreateRecomendation from './createRecomendation';
import App from './app';
import Recommendation from './recommendation';
export const Root = () => {
    return (
      <div>
        <Router>
          <Route path="/" component= { App } >
            <IndexRoute component= { Recommendation } />
            <Route path="create" component= { CreateRecomendation } />
          </Route>
        < /Router>
      </div>
    );
};
