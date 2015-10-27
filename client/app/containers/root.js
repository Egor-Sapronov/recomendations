import React from 'react';
import {Route, Router} from 'react-router';
import CreateRecomendation from './createRecomendation';
import App from './app';
import Recomendation from './recomendation';

export const Root = () => {
    return (
      <div>
        <Router>
          <Route path="/" component= { App } >
            <Route path="/" component= { Recomendation } />
            <Route path="create" component= { CreateRecomendation } />
          </Route>
        < /Router>
      </div>
    );
};
