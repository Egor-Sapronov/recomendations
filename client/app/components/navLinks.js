import React from 'react';
import {IndexLink, Link} from 'react-router';

export default () => {
    return (
        <nav className="mdl-navigation mdl-layout--large-screen-only">
            <IndexLink
                to="/"
                className="mdl-navigation__link"
                activeClassName="mdl-navigation__link mdl-navigation__link--active"
            >
                Home
            </IndexLink>
            <Link to="/top"
                className="mdl-navigation__link"
                activeClassName="mdl-navigation__link--active"
            >
                Top
            </Link>
            <Link
                to="/likes"
                className="mdl-navigation__link"
                activeClassName="mdl-navigation__link--active"
            >
                Likes
            </Link>
        </nav>
    );
}
