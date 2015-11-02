import React, {Component, PropTypes} from 'react';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux';
import * as recomendationActions from '../actions/recomendation';
import RaisedButton from 'material-ui/lib/raised-button';
import TextField from 'material-ui/lib/text-field';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import FontIcon from 'material-ui/lib/font-icon';
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
    static propTypes() {
        return {
            dispatch: PropTypes.func,
        };
    }

    constructor(props) {
        super(props);

        this.state = {};
    }

    onDrop(file) {
        this.setState({
            image: file[0],
        });
    }

    handleContentChange({target}) {
        this.setState({
            content: target.value,
        });
    }

    handleClick() {
        this.props.dispatch(recomendationActions.create(this.state));
    }

  render() {
      return (<div>
              <TextField rows={3} fullWidth hintText="Text" multiLine onChange={this.handleContentChange.bind(this)}/>
              <br/>
              <FloatingActionButton onClick={this.handleClick.bind(this)}>
                <FontIcon className="material-icons">add</FontIcon>
              </FloatingActionButton>
            < /div>);
  }
}

export default connect()(CreateRecomendation);
