import React, {Component} from 'react';
import {Route, Router} from 'react-router';
import CreateRecomendation from '../components/createRecomendation';
import App from '../components/app';
import Auth from '../components/auth';

export default class Root extends Component {
  render() {
    return (
      <Router>
        <Route path="/" component= { App } >
          <Route path="auth" component= { Auth } />
          <Route path="create" component= { CreateRecomendation } />
        </Route>
      < /Router>
    );
  }
}
