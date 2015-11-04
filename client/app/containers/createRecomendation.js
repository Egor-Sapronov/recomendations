import React, {Component, PropTypes} from 'react';
import Dropzone from 'react-dropzone';
import {connect} from 'react-redux';
import * as recomendationActions from '../actions/recomendation';
import RaisedButton from 'material-ui/lib/raised-button';

import Paper from 'material-ui/lib/paper';
import TextField from 'material-ui/lib/text-field';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import FontIcon from 'material-ui/lib/font-icon';
import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardTitle from 'material-ui/lib/card/card-title';
import CardText from 'material-ui/lib/card/card-text';
import CardActions from 'material-ui/lib/card/card-actions';
import CardMedia from 'material-ui/lib/card/card-media';

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
      return (<Card>
                <CardTitle title="Create new" />
                <CardText>
                    <div>{this.state.image ?
                            <Paper zDepth={1} style={{maxWidth: '300px'}}>
                                <img style={{maxWidth:'300px', height: 'auto'}} src={this.state.image.preview} />
                            </Paper> : ''}</div>
                    <TextField rows={3} fullWidth hintText="Text" multiLine onChange={this.handleContentChange.bind(this)}/>
                </CardText>
                <CardText>
                    <FloatingActionButton>
                        <FontIcon className="material-icons">
                            photo_camera
                            <Dropzone multiple={false} style={style} onDrop={ this.onDrop.bind(this) } />
                        </FontIcon>
                    </FloatingActionButton>
                    <FloatingActionButton style={{float: 'right'}} onClick={this.handleClick.bind(this)}>
                        <FontIcon className="material-icons">send</FontIcon>
                    </FloatingActionButton>
                </CardText>
            < /Card>);
  }
}

export default connect()(CreateRecomendation);
