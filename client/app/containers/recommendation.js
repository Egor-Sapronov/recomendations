import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import * as recomendationActions from '../actions/recomendation';
import { Link } from 'react-router';

import Embed from '../components/embed';

import Card from 'material-ui/lib/card/card';
import CardHeader from 'material-ui/lib/card/card-header';
import CardText from 'material-ui/lib/card/card-text';
import CardActions from 'material-ui/lib/card/card-actions';
import FlatButton from 'material-ui/lib/flat-button';
import CircularProgress from 'material-ui/lib/circular-progress';
import RaisedButton from 'material-ui/lib/raised-button';

const FETCHING = 'FETCHING';
const RECOMENDATION = 'RECOMENDATION';
const NO_RECOMENDATION = 'NO_RECOMENDATION';

class Recommendation extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        _id: PropTypes.string,
        screen: PropTypes.string,
        _user: PropTypes.object,
        linkedContent: PropTypes.string,
        data: PropTypes.array,
    }

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
        let displayScreen = <RaisedButton label="Try again" primary href="#recomendation" onClick={this.getNext.bind(this)} />;

        if (screen === FETCHING) {
            displayScreen = <CircularProgress mode="indeterminate" />;
        }

        if (screen === RECOMENDATION) {
            displayScreen = (
                <Card>
                    <Link to={`/profile/${this.props._user._id}`}>
                        <CardHeader
                            title={this.props._user.displayName}
                            subtitle={this.props._user.location}
                            avatar={`http://graph.facebook.com/${this.props._user.providerId}/picture?&type=large`}
                        />
                    </Link>
                    <CardText>
                        {this.props.linkedContent ? <div dangerouslySetInnerHTML={{ __html: this.props.linkedContent}} /> : '' }
                        {this.props.data.map(item => <Embed key={ item._id } {...item} />)}
                    </CardText>
                    <CardActions>
                        <FlatButton onClick={this.handleDislike.bind(this)} label="dislike"/>
                        <FlatButton onClick={this.handleLike.bind(this)} label="like"/>
                    </CardActions>
                </Card>);
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
