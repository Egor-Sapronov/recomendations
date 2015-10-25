import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux';
import * as recomendationActions from '../actions/recomendation';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';

const style = {
  cursor: 'pointer',
  position: 'absolute',
  top: '0px',
  bottom: '0px',
  right: '0px',
  left: '0px',
  width: '100%',
  opacity: '0',
};

export class CreateRecomendation extends Component {
  constructor(props) {
    super(props);

    this.state = {};
    this.onDrop = this.onDrop.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
    this.onChange = this.onChange.bind(this);
  }

  onDrop(file) {
    this.setState({image: file[0]});
  }

  onChange(e) {
    this.setState({image: e.target.files[0]});
  }

  handleContentChange({target}) {
    this.setState({content: target.value});
  }

  handleClick() {
    this.props.dispatch(recomendationActions.create(this.state));
  }

  render() {
    return (<div>
              <div>{this.state.image ? <img style={{width: '200px', height: '200px'}} src={this.state.image.preview} /> : ''}</div>              
              <RaisedButton label="Choose an image">
                <Dropzone multiple={false} style={style} onDrop={ this.onDrop } />
              </RaisedButton>
              <br />
              <TextField hintText="Text" multiLine={true} onChange={this.handleContentChange}/>
              <br />
              <button onClick={this.handleClick} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                <i className="material-icons">add</i>
              </button>
            < /div>);
  }
}

export default connect()(CreateRecomendation);
