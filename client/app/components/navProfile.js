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
                <FloatingActionButton mini style={{marginRight: '10px'}}>
                    <FontIcon className="material-icons">create</FontIcon>
                </FloatingActionButton>
            </Link>
            <Link to="/profile">
                <Paper circle zDepth={2}>
                    <Avatar
                        style={{ width: '40px', height: '40px' }}
                        src={`https://graph.facebook.com/${user.providerId}/picture?&type=large`}
                    />
                </Paper>
            </Link>
        </div>
    );
}
