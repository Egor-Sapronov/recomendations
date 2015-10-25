import React from 'react';
import {Route, Router} from 'react-router';
import CreateRecomendation from './createRecomendation';
import App from './app';
import Recomendation from './recomendation';
import Auth from '../components/auth';

export const Root = ()=>{
    return (
      <div>
        <Router>
          <Route path="/" component= { App } >
            <Route path="create" component= { CreateRecomendation } />
            <Route path="recomendation" component= { Recomendation } />
            <Route path="auth/:token" component= { Auth } />
          </Route>
        < /Router>
      </div>
    );
};
