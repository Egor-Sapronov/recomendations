import React, { Component } from 'react';
import {connect} from 'react-redux';
import * as recomendationActions from '../actions/recomendation';

import Embed from '../components/embed';

import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardActions from 'material-ui/lib/card/card-actions';
import FlatButton from 'material-ui/lib/flat-button';
import CardMedia from 'material-ui/lib/card/card-media';
import CircularProgress from 'material-ui/lib/circular-progress';
import RaisedButton from 'material-ui/lib/raised-button';

const FETCHING = 'FETCHING';
const RECOMENDATION = 'RECOMENDATION';
const NO_RECOMENDATION = 'NO_RECOMENDATION';

class Recommendation extends Component {
    constructor(props) {
        super(props);
    }
    componentWillMount() {
        this.getNext();
    }

    getNext() {
        this.props.dispatch(recomendationActions.getNext());
    }

    handleLike() {
        return this.props.dispatch(recomendationActions.like(this.props._id));
    }

    handleDislike() {
        return this.props.dispatch(recomendationActions.dislike(this.props._id));
    }

    render() {
        const {screen} = this.props;
        let displayScreen = <RaisedButton label="Try again" primary href="#recomendation" onClick={this.getNext.bind(this)} />;;

        if(screen===FETCHING){
            displayScreen = <CircularProgress mode="indeterminate" />;
        }

        if (screen===RECOMENDATION){
            displayScreen = <Card>
                <CardHeader
                   title={this.props._user.displayName}
                   subtitle="Subtitle"
                   avatar={`http://graph.facebook.com/${this.props._user.providerId}/picture`}
                />
                { this.props.imageName ? <CardMedia>
                    <img src={this.props.image} />
                </CardMedia> : ''}
                <CardText>
                    {this.props.linkedContent ?<div dangerouslySetInnerHTML={{__html: this.props.linkedContent}} /> : '' }
                    {this.props.data.map(item => <Embed {...item} />)}
                </CardText>
                <CardActions>
                    <FlatButton onClick={this.handleDislike.bind(this)} label="dislike"/>
                    <FlatButton onClick={this.handleLike.bind(this)} label="like"/>
                </CardActions>
            </Card>;
        }

        return displayScreen;
    }
}

function getScreen(state) {
    if (state.isFetching) {
        return FETCHING;
    }

    if (state.isRecomendation) {
        return RECOMENDATION;
    }

    return NO_RECOMENDATION;
}

function select(state) {
    return {
        ...state.recomendation,
        screen: getScreen(state.recomendation),
    };
}

export default connect(select)(Recommendation);
