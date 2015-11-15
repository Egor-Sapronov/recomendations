import React from 'react';
import { Link } from 'react-router';
import FloatingActionButton from 'material-ui/lib/floating-action-button';
import Avatar from 'material-ui/lib/avatar';
import FontIcon from 'material-ui/lib/font-icon';
import Paper from 'material-ui/lib/paper';

export default ({user}) => {
    return (
        <div className="mdl-navigation mdl-layout--large-screen-only">
            <Link to="/create">
                <button
                    className="mdl-button mdl-js-button mdl-button--fab mdl-button--mini-fab mdl-button--colored"
                    style={{
                        backgroundColor: 'rgb(63, 81, 181)',
                        marginRight: '10px'
                    }}
                >
                    <i className="material-icons">create</i>
                </button>
            </Link>
            <Link to="/profile">
                <Avatar
                    className="mdl-shadow--2dp"
                    style={{ width: '40px', height: '40px' }}
                    src={`https://graph.facebook.com/${user.providerId}/picture?&type=large`}
                />
            </Link>
        </div>
    );
}
