import React from 'react';
import {Route, Router} from 'react-router';
import CreateRecomendation from '../components/createRecomendation';
import App from '../components/app';
import Recomendation from '../components/recomendation';
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
