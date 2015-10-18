import React from 'react';
import {Route, Router} from 'react-router';
import CreateRecomendation from '../components/createRecomendation';
import App from '../components/app';
import Signin from '../components/signin';
import Signup from '../components/signup';
import Recomendation from '../components/recomendation';

export const Root = ()=>{
  return (
      <div>
        <Router>
          <Route path="/" component= { App } >
            <Route path="signin" component= { Signin } />
            <Route path="signup" component= {Signup} />
            <Route path="create" component= { CreateRecomendation } />
            <Route path="recomendation" component= { Recomendation } />
          </Route>
        < /Router>
      </div>
    );
};
