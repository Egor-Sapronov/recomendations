import React from 'react';

export default (props) => {
    return (
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
    );
};
