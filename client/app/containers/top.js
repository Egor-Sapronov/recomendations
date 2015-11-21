import React, {Component, PropTypes} from 'react';
import PostHeader from '../components/postHeader';
import PostShare from '../components/postShare';
import PostContent from '../components/postContent';
import { connect } from 'react-redux';
import Loader from '../components/loader';
import ProfilePosts from '../components/profilePosts';

class Top extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
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
        return <ProfilePosts { ...this.props } />;
    }
}

function select(state) {
    return {
        ...state.top,
    };
}

export default connect(select)(Top);
