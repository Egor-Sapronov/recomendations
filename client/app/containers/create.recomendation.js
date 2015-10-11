import React, {Component} from 'react';
import Dropzone from 'react-dropzone';
import Content from '../components/content';

export default class CreateRecomendation extends Component {
  constructor(props) {
    super(props);
    
    this.state = {};
    this.onDrop = this.onDrop.bind(this);
  }

  onDrop(file) {
    this.setState({file: file[0]});
  }

  handleContentChange() {
  }

  render() {
    return (<div>
              <Dropzone multiple={false} onDrop={ this.onDrop }>
                <div>{this.state.file ? <img style={{width: '200px', height: '200px'}} src={this.state.file.preview} /> : 'Фотография'}</div>
              </Dropzone>
              <p>asfasdsfdasfasfsf</p>
              <Content onChange={ this.handleContentChange } />
              <button className="mdl-button mdl-js-button mdl-button--fab mdl-js-ripple-effect mdl-button--colored">
                <i className="material-icons">add</i>
              </button>
            < /div>);
  }
}
