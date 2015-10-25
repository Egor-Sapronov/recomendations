import React, {Component} from 'react';

export default class Auth extends Component {
  componentWillMount() {
    console.log(this.props.params.token);
  }

  render() {
    return (
      <div>
      </div>
    );
  }
}