import React from 'react';

export default (props) => {
    return (
        <div className="mdl-card__actions mdl-card--border">
            <div className="mdl-grid">
                <button onClick={ props.onDislike } className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    skip
                </button>
                <div className="mdl-layout-spacer" />
                <button onClick={ props.onLike } className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
                    <i className="material-icons ">favorite</i>
                </button>
            </div>
        </div>
    );
};
