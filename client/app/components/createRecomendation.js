import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import Content from './content';
import {api} from '../api/api';

export default class CreateRecomendation extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
    this.onDrop = this.onDrop.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleContentChange = this.handleContentChange.bind(this);
  }

  onDrop(file) {
    this.setState({image: file[0]});
  }

  handleContentChange({target}) {
    this.setState({content: target.value});
  }

  handleClick() {
    api.postRecomendation(this.state);
  }

  render() {
    return (<div>
              <Dropzone multiple={false} onDrop={ this.onDrop }>
                <div>{this.state.image ? <img style={{width: '200px', height: '200px'}} src={this.state.image.preview} /> : 'Фотография'}</div>
              </Dropzone>
              <Content onChange={ this.handleContentChange } />
              <button onClick={this.handleClick} className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                <i className="material-icons">add</i>
              </button>
            < /div>);
  }
}
