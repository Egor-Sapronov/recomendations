import React, {Component} from 'react';
import {connect} from 'react-redux';
import * as recomendationActions from '../actions/recomendation';

export class Recomendation extends Component {
  constructor(props) {
    super(props);

    this.handleLike = this.handleLike.bind(this);
    this.handleDislike = this.handleDislike.bind(this);
  }

  componentWillMount() {
    this.props.dispatch(recomendationActions.getNext());
  }

  handleLike() {
    return this.props.dispatch(recomendationActions.like(this.props._id));
  }

  handleDislike() {
    return this.props.dispatch(recomendationActions.dislike(this.props._id));
  }

  render() {
    return ()=>{
      return this.props.isRecomendation ? <div>
              <img style={{width: '300px'}} src={this.props.image}/>
              <p>{this.props.content}</p>
              <button onClick={this.handleLike} >Like</button>
              <button onClick={this.handleDislike} >Dislike</button>
            < /div> : <p>No recomendations</p>;
    }();
  }
}

function select(state) {
  return {...state.recomendation };
}

export default connect(select)(Recomendation);
