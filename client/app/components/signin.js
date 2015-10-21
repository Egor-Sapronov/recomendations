import React from 'react';
import {connect} from 'react-redux';
import * as authActions from '../actions/auth';
import * as mixins from './mixins/mixins';
import {componentFactory} from './auth';

function handleClick() {
  const email = this.refs.email_ref.value;
  const password = this.refs.password_ref.value;

  this.props.dispatch(authActions.signin({ email, password }));
}

const clickMixin = {
  handleClick,
};

const Signin = componentFactory(React).compose(mixins.materialMixin, clickMixin);

function setProps() {
  return {
    title: 'Signin',
  };
}

export default connect(setProps)(Signin);
