import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as recomendationActions from '../actions/recomendation';
import CircularProgress from 'material-ui/lib/circular-progress';
import RaisedButton from 'material-ui/lib/raised-button';

const FETCHING = 'FETCHING';
const RECOMENDATION = 'RECOMENDATION';
const NO_RECOMENDATION = 'NO_RECOMENDATION';

export class Recomendation extends Component {
    static propTypes() {
        return {
            dispatch: PropTypes.func,
            _id: PropTypes.string,
            screen: PropTypes.string,
            image: PropTypes.string,
            content: PropTypes.string,
        };
    }

    constructor(props) {
        super(props);

        this.handleLike = this.handleLike.bind(this);
        this.handleDislike = this.handleDislike.bind(this);
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
        let screen;
        switch (this.props.screen) {
            case FETCHING:
                screen = <CircularProgress mode="indeterminate" />;
                break;
            case RECOMENDATION:
                screen = (
                    <div>
                        <img style={{width: '300px'}} src={this.props.image}/>
                        <p>{this.props.content}</p>
                        <button onClick={this.handleLike} >Like</button>
                        <button onClick={this.handleDislike} >Dislike</button>
                    < /div>);
                break;
            default:
                screen = <RaisedButton label="Try again" primary href="#recomendation" onClick={this.getNext.bind(this)} />;
        }

        return screen;
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

export default connect(select)(Recomendation);