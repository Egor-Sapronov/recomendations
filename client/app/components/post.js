import React from 'react';
import CardHeader from 'material-ui/lib/card/card-header'

const actionStyle = {
    display: 'flex',
    boxSizing: 'border-box',
    alignItems: 'center',
    paddingRight: '16px',
};

export default (props) => {
    return (
        <div style={{width: '100%'}} className="mdl-card mdl-shadow--2dp">
            <div className="mdl-card__title">
                <CardHeader
                    style={{padding: '0'}}
                    title="asfasf"
                    subtitle="asfasf"
                    avatar={`http://graph.facebook.com/969801583078765/picture?&type=large`}
                />
            </div>
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

            <div style={{top: '20px'}} className="mdl-card__menu">
                <button id="card_menu" className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                    <i className="material-icons">share</i>
                </button>
                <ul
                    className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                    htmlFor="card_menu"
                >
                    <li className="mdl-menu__item">Some Action</li>
                    <li className="mdl-menu__item">Another Action</li>
                    <li className="mdl-menu__item">Yet Another Action</li>
                </ul>
            </div>
        </div>
    );
};
