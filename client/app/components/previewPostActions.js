import React from 'react';

export default (props) => {
    return (
        <div className="mdl-card__actions">
            <div className="mdl-grid">
                <div className="mdl-layout-spacer" />
                <button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
                    <i className="material-icons ">favorite</i>
                </button>
                <p>{ props.likesCount }</p>
            </div>
        </div>
    );
};
