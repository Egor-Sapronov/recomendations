import React from 'react';

export default (props) => {
    return (
        <div>
            <div className="logo-font logo-slogan mdl-typography--text-center">
              No recommendation ;(
            </div>
            <div className="mdl-grid" style={{paddingTop: '20px'}}>
                <div className="mdl-layout-spacer" />
                <button onClick={ props.onClick } className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored">
                    next
                </button>
                <div className="mdl-layout-spacer" />
            </div>
        </div>
    );
};
