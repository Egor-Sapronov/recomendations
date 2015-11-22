import React, {Component, PropTypes} from 'react';
import {connect} from 'react-redux';
import * as authActions from '../actions/auth';
import Navbar from './navbar';
import LayoutContent from '../components/layoutContent';
import MessageBar from '../components/messageBar';
import MobileNav from '../components/mobileNav';

class App extends Component {
    static propTypes = {
        children: PropTypes.node,
        dispatch: PropTypes.func,
        user: PropTypes.object,
        message: PropTypes.string,
    }

    componentDidMount() {
        componentHandler.upgradeDom();
    }

    componentDidUpdate() {
        componentHandler.upgradeDom();
    }

    componentWillMount() {
        this.props.dispatch(authActions.getUserinfo());
    }

    render() {
        return (
            <div className="recomea-layout-transparent mdl-layout mdl-js-layout mdl-layout--fixed-header">
                <Navbar user={ this.props.user } />
                <MobileNav user={ this.props.user } auth={ this.props.auth } />
                <LayoutContent children={ this.props.children } />
                { this.props.message ? <MessageBar message={ this.props.message }/> : ''}
            </div>
        );
    }
}

function select(state) {
    return {
        user: state.user,
        auth: state.auth,
        message: state.snack.message,
    };
}

export default connect(select)(App);
