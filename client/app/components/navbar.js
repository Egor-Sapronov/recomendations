import React from 'react';

export default props => (
  <header className="mdl-layout__header">
    <div className="mdl-layout__header-row">
      <span className="mdl-layout-title">Title</span>
      <div className="mdl-layout-spacer" />
      <nav className="mdl-navigation mdl-layout--large-screen-only">
        <a className="mdl-navigation__link" href="#create">Create</a>
        <a className="mdl-navigation__link" href="#recomendation">Recomendation</a>
        <a className="mdl-navigation__link" href="/facebook">Signup</a>
        <a className="mdl-navigation__link" href="#signin">Signin</a>
        <a className="mdl-navigation__link" href="#">{props.user}</a>
      </nav>
    </div>
  </header>
);
