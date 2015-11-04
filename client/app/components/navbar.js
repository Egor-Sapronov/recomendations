import React, { Component } from 'react';
import {IndexLink, Link} from 'react-router';
import Avatar from 'material-ui/lib/avatar';
import FlatButton from 'material-ui/lib/flat-button';
import FontIcon from 'material-ui/lib/font-icon';
import IconButton from 'material-ui/lib/icon-button';
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
                <div className="mdl-layout-spacer" />
                <nav className="mdl-navigation mdl-layout--large-screen-only">
                    <Link to="/create">
                        <FloatingActionButton mini style={{marginRight: '10px'}}>
                            <FontIcon className="material-icons">create</FontIcon>
                        </FloatingActionButton>
                    </Link>
                    <Link to="/profile">
                        <Paper circle zDepth={2}>
                            <Avatar style={{width:'40px', height:'40px'}} src={`http://graph.facebook.com/${this.props.user.providerId}/picture?&type=large`} />
                        </Paper>
                    </Link>
                </nav>
                </div>
                <div className="mdl-layout--large-screen-only" style={{paddingLeft: '56px'}} >
                    <IndexLink to="/" className="mdl-layout__tab" activeClassName="mdl-layout__tab is-active">Home</IndexLink>
                    <Link to="/top" className="mdl-layout__tab" activeClassName="mdl-layout__tab is-active">Top</Link>
                    <Link to="/likes" className="mdl-layout__tab" activeClassName="mdl-layout__tab is-active">Likes</Link>
                </div>
            </header>
        );
    }
}
