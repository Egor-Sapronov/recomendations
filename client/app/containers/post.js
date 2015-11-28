import React, {Component, PropTypes} from 'react';
import PostHeader from '../components/postHeader';
import PostShare from '../components/postShare';
import PostContent from '../components/postContent';
import PreviewPostActions from '../components/previewPostActions';
import Loader from '../components/loader';
import { connect } from 'react-redux';
import PostMeta from '../components/postMeta';

class Post extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        params: PropTypes.object,
        _user: PropTypes.object,
        isLoading: PropTypes.bool,
        content: PropTypes.string,
    }

    constructor(props) {
        super(props);
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
                    <div style={{width: '100%'}} className="mdl-card">
                        <PostMeta
                            url={`${process.env.APP_HOST}/recomendation/${this.props._id}`}
                            description={ this.props.content }
                            image={ this.props.data[0].thumbnail_url }
                        />
                        <PostHeader { ...this.props._user } displayDate={ this.props.displayDate } />
                        <PostShare { ...this.props } />
                        <PostContent { ...this.props } />
                        <PreviewPostActions { ...this.props } />
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
