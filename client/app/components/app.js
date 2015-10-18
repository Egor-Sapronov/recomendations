import React, {Component, PropTypes} from 'react';
import { Link} from 'react-router';
import {connect} from 'react-redux';
import * as authActions from '../actions/auth';

class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  componentWillMount() {
    this.props.dispatch(authActions.getUserinfo());
  }

  render() {
    const links = [
      '/',
      '/create',
      '/signin',
      '/signup',
    ].map((link, index) => <p key={ index } > <Link to={ link } > { link } < /Link>< /p >);
    return (
      <div>
      <h1>App container< /h1>
      < h4 > { this.props.user.email } < /h4>
    { links }
    { this.props.children }
    </div>);
  }
}

function select(state) {
  return {
    user: state.user,
  };
}

export default connect(select)(App);
