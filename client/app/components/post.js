import React from 'react';
import PostHeader from './postHeader';
import PostShare from './postShare';

const actionStyle = {
    display: 'flex',
    boxSizing: 'border-box',
    alignItems: 'center',
    paddingRight: '16px',
};

export default (props) => {
    return (
        <div style={{width: '100%'}} className="mdl-card mdl-shadow--2dp">
            <PostHeader />
            <PostShare />
            <div className="mdl-card__supporting-text">
                asfasf
            </div>
            <div className="mdl-card__actions mdl-card--border" style={actionStyle} >
                <a className="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
                    skip
                </a>
                <div className="mdl-layout-spacer"></div>
                <button className="mdl-button mdl-js-button mdl-button--icon mdl-button--colored">
                    <i className="material-icons">favorite</i>
                </button>
            </div>
        </div>
    );
};
