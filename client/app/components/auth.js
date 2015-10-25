import React, {Component} from 'react';
import {connect} from 'react-redux';

function select(state) {
  return state;
}

class Auth extends Component {
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

export default connect(select)(Auth);