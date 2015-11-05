import React, {Component, PropTypes} from 'react';
import * as profileActions from '../actions/profile';
import {connect} from 'react-redux';
import ProfileAvatar from '../components/profileAvatar';
import ProfileDisplayName from '../components/profileDisplayName';
import Loader from '../components/loader';

class Profile extends Component {
    static propTypes = {
        dispatch: PropTypes.func.isRequired,
        params: PropTypes.object,
        isLoading: PropTypes.bool.isRequired,
    }

    constructor(props) {
        super(props);
    }

    componentWillMount() {
        this.props.dispatch(profileActions.getProfile(this.props.params.id));
    }

    render() {
        return (
            <div>{this.props.isLoading ? <Loader /> :
                <div>
                    <ProfileAvatar {...this.props} />
                    <ProfileDisplayName {...this.props} />
                </div>}</div>
        );
    }
}

function select(state) {
    return { ...state.profile };
}

export default connect(select)(Profile);
