import React from 'react';

export default (props) => {
    return (
        <div className="mdl-grid">
            <div className="mdl-layout-spacer" />
            <button
                onClick={ props.onClick }
                disabled={ props.disabled }
                className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored">
                { props.title }
            </button>
        </div>
    );
};
