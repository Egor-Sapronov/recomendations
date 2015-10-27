import React from 'react';
import {Route, Router, IndexRoute} from 'react-router';
import CreateRecomendation from './createRecomendation';
import App from './app';
import Recomendation from './recomendation';
import createHashHistory from 'history/lib/createHashHistory';

export const Root = () => {
    return (
      <div>
        <Router>
          <Route path="/" component= { App } >
            <IndexRoute component= { Recomendation } />
            <Route path="create" component= { CreateRecomendation } />
          </Route>
        < /Router>
      </div>
    );
};
