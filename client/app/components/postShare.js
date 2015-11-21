import React from 'react';
import { FacebookButton, TwitterButton } from "react-social";

export default ({_id, content}) => {
    const url = `${process.env.APP_HOST}/recomendation/${_id}`;
    return (
        <div style={{top: '20px'}} className="mdl-card__menu">
            <button id={ `card_menu${_id}` } className="mdl-button mdl-button--icon mdl-js-button mdl-js-ripple-effect">
                <i className="material-icons">share</i>
            </button>
            <ul
                className="mdl-menu mdl-menu--bottom-right mdl-js-menu mdl-js-ripple-effect"
                htmlFor={ `card_menu${_id}` }
            >
                <a href={url} target="_blank" style={{textDecoration: "none"}}>
                    <li className="mdl-menu__item">
                        <i className="icon-link" style={{marginRight: '5px'}} />
                        Link
                    </li>
                </a>
                <li className="mdl-menu__item">
                    <FacebookButton url={url} element="div" message={content} >
                        <i className="icon-facebook2" style={{marginRight: '5px'}} />
                        Share on facebook
                    </FacebookButton>
                </li>
                <li className="mdl-menu__item">
                    <TwitterButton url={url} element="div" message={content} >
                        <i className="icon-twitter" style={{marginRight: '5px'}} />
                        Share on twitter
                    </TwitterButton>
                </li>
            </ul>
        </div>
    );
};
