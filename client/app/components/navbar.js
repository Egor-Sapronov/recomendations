import React, { Component } from 'react';
import {IndexLink, Link} from 'react-router';
import Avatar from 'material-ui/lib/avatar';
import FontIcon from 'material-ui/lib/font-icon';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import Paper from 'material-ui/lib/paper';

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
                    <nav className="mdl-navigation mdl-layout--large-screen-only">
                        <IndexLink to="/" className="mdl-navigation__link">Home</IndexLink>
                        <Link to="/top" className="mdl-navigation__link">Top</Link>
                        <Link to="/likes" className="mdl-navigation__link">Likes</Link>
                    </nav>
                    <div className="mdl-layout-spacer" />
                    <div className="mdl-navigation mdl-layout--large-screen-only">
                        <Link to="/create">
                            <FloatingActionButton mini style={{marginRight: '10px'}}>
                                <FontIcon className="material-icons">create</FontIcon>
                            </FloatingActionButton>
                        </Link>
                        <Link to="/profile">
                            <Paper circle zDepth={2}>
                                <Avatar
                                    style={{ width: '40px', height: '40px' }}
                                    src={`https://graph.facebook.com/${this.props.user.providerId}/picture?&type=large`}
                                />
                            </Paper>
                        </Link>
                    </div>
                </div>
            </header>
        );
    }
}
