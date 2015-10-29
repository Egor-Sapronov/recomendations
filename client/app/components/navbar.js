import React from 'react';
import {IndexLink, Link} from 'react-router';

export default props => (
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">
      <span className="mdl-layout-title">Title</span>
      <div className="mdl-layout-spacer" />
      <nav className="mdl-navigation mdl-layout--large-screen-only">
        <IndexLink className="mdl-navigation__link" to="/">Recommendation</IndexLink>
        <Link className="mdl-navigation__link" to="/create">Create</Link>
        <Link className="mdl-navigation__link" to="/profile">{props.user}</Link>
      </nav>
    </div>
  </header>
);
