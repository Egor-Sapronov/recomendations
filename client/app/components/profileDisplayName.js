import React from 'react';

export default props => {
    return (
        <div className="mdl-grid" style={{padding: '20px'}}>
            <div className="mdl-layout-spacer" />
            <p className="mdl-typography--display-2" style={{fontWeight: '200'}}>{props.displayName}</p>
            <div className="mdl-layout-spacer" />
        </div>
    );
};
