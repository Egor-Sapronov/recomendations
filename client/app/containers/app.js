import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as authActions from '../actions/auth';
import Navbar from '../components/navbar';
import LayoutContent from '../components/layoutContent';
class App extends Component {
    static propTypes = {
        children: PropTypes.node,
        dispatch: PropTypes.func,
        user: PropTypes.object,
    }

    componentWillMount() {
        this.props.dispatch(authActions.getUserinfo());
    }

    render() {
        return (
            <div>
                <Navbar user={ this.props.user.displayName } />
                <LayoutContent children={ this.props.children } />
            </div>
        );
    }
}

function select(state) {
    return {
        user: state.user,
    };
}

export default connect(select)(App);
