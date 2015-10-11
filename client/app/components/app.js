import React, {Component, PropTypes} from 'react';
import { Link} from 'react-router';

export default class App extends Component {
  static propTypes = {
    children: PropTypes.node,
  }

  render() {
    const links = [
      '/',
      '/create',
      '/auth',
    ].map((link, index) => <p key={ index } > <Link to={ link } > { link } < /Link>< /p >);

    return (
      <div>
      <h1>App container< /h1>
    { links }
    { this.props.children }
    </div>);
  }
}