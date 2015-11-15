import React, { Component } from 'react';
import NavLinks from '../components/navLinks';
import NavProfile from '../components/navProfile';
import { connect } from 'react-redux';

export default class Navbar extends Component {
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
            <header className="mdl-layout__header">
                <div className="mdl-layout__header-row">
                    <span className="mdl-layout-title">Recomea</span>
                    {this.props.auth.isAuthenticated ? <NavLinks /> : ''}
                    <div className="mdl-layout-spacer" />
                    {this.props.auth.isAuthenticated ? <NavProfile {...this.props} /> : ''}
                </div>
            </header>
        );
    }
}

function select(state) {
    return {
        auth: state.auth,
        user: state.user,
    };
}

export default connect(select)(Navbar);
