import React, {Component, PropTypes} from 'react';
import PostHeader from '../components/postHeader';
import PostShare from '../components/postShare';
import PostContent from '../components/postContent';
import Loader from '../components/loader';
import PostActions from '../components/postActions';
import NextButton from '../components/nextButton';

import * as recomendationActions from '../actions/recomendation';
import { connect } from 'react-redux';

class Next extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        isRecomendation: PropTypes.bool,
        _user: PropTypes.object,
        _id: PropTypes.string,
        isLoading: PropTypes.bool,
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.getNext();
    }

    componentDidMount() {
        componentHandler.upgradeDom();
    }

    componentDidUpdate() {
        componentHandler.upgradeDom();
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
        if (this.props.isLoading) {
            return <Loader />;
        }

        if (!this.props.isRecomendation) {
            return <NextButton onClick={ this.getNext.bind(this) } />;
        }

        return (
            <div>{ this.props.isLoading ? <Loader /> :
                    <div style={{width: '100%'}} className="mdl-card">
                        <PostHeader { ...this.props._user } displayDate={ this.props.displayDate } />
                        <PostShare { ...this.props } />
                        <PostContent { ...this.props } />
                        <PostActions
                            onLike={ this.handleLike.bind(this) }
                            onDislike={ this.handleDislike.bind(this) }
                            likesCount={ this.props.likesCount }
                        />
                    </div>
                }</div>
        );
    }
}

function select(state) {
    return {
        ...state.recomendation,
    };
}

export default connect(select)(Next);
