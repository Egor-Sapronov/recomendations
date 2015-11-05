import React from 'react';
import CircularProgress from 'material-ui/lib/circular-progress';

export default () => {
    return (
        <div className="mdl-grid" style={{padding: '80px'}}>
            <div className="mdl-layout-spacer" />
            <CircularProgress mode="indeterminate" value={60} size={2} />
            <div className="mdl-layout-spacer" />
        </div>
    );
};
