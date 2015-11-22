import React, { Component, PropTypes } from 'react';
import PostPreview from '../components/postPreview';
import { fetchPost } from '../actions/post';
import { connect } from 'react-redux';
import Loader from '../components/loader';

class Featured extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.dispatch(fetchPost(this.props.id));
  }

  render() {
    return (
      <div style={{width: '100%'}}>
        { this.props.isLoading ? <Loader /> : <PostPreview { ...this.props } /> }
      </div>
    );
  }
}

function select(state) {
    return {
        ...state.post,
    };
}

export default connect(select)(Featured);
