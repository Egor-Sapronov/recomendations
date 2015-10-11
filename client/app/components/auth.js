import React, {Component} from 'react';
import {api} from '../api/api';

export default class Auth extends Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    const email = this.refs.email_ref.getDOMNode().value;
    const password = this.refs.password_ref.getDOMNode().value;

    api.auth(email, password);
  }

  render() {
    return (
      <div>
      <h1>Auth < /h1>
      < div >
      <div className="mdl-textfield mdl-js-textfield" >
      <input ref="email_ref" className= "mdl-textfield__input" type= "text" id= "email_input" />
      <label className="mdl-textfield__label" htmlFor= "email_input" > Email < /label>
      < /div>
      < div className= "mdl-textfield mdl-js-textfield" >
      <input ref="password_ref" className= "mdl-textfield__input" type= "text" id= "password_input" />
      <label className="mdl-textfield__label" htmlFor= "password_input" > Password < /label>
      < /div>
      < /div>
      < button onClick= { this.handleClick } className= "mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored" >
      <i className="material-icons" > add < /i>
      < /button>
      < /div>
      );
  }
}
