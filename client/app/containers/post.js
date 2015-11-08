import React, {Component, PropTypes} from 'react';
import { fetchPost } from '../actions/post';
import PostHeader from '../components/postHeader';
import PostShare from '../components/postShare';
import PostContent from '../components/postContent';
import { connect } from 'react-redux';
import Loader from '../components/loader';

class Post extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        params: PropTypes.object,
        _user: PropTypes.object,
        isLoading: PropTypes.bool,
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(fetchPost(this.props.params.id));
    }

    componentDidMount() {
        componentHandler.upgradeDom();
    }

    componentDidUpdate() {
        componentHandler.upgradeDom();
    }

    render() {
        return (
            <div>{ this.props.isLoading ? <Loader /> :
                    <div style={{width: '100%'}} className="mdl-card mdl-shadow--2dp">
                        <PostHeader { ...this.props._user } />
                        <PostShare />
                        <PostContent { ...this.props } />
                    </div>
                }</div>
        );
    }
}

function select(state) {
    return {
        ...state.post,
    };
}

export default connect(select)(Post);
