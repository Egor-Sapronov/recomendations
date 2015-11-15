import React from 'react';
import Avatar from 'material-ui/lib/avatar';

export default props => {
    return (
        <div className="mdl-grid" style={{marginTop: '20px'}}>
            <div className="mdl-layout-spacer" />
            <Avatar
                className="mdl-shadow--2dp"
                style={{width: '200px', height: '200px'}}
                src={`https://graph.facebook.com/${props.providerId}/picture?width=1000&height=1000`}
            />
            <div className="mdl-layout-spacer" />
        </div>
    );
};
