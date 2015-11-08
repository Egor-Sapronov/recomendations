import React from 'react';

export default (props) => {
    return (
        <div style={{padding: '40px'}}>
            <div className="mdl-grid">
                <div className="mdl-layout-spacer" />
                <p className="mdl-typography--display-2" style={{fontWeight: '200'}}>No recommendation ;(</p>
                <div className="mdl-layout-spacer" />
            </div>
            <div className="mdl-grid">
                <div className="mdl-layout-spacer" />
                <button onClick={ props.onClick } className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored">
                    next
                </button>
                <div className="mdl-layout-spacer" />
            </div>
        </div>
    );
};
