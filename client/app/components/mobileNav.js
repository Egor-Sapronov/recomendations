import React from 'react';
import NavLinks from './navLinks';
import NavProfile from './navProfile';
import FacebookButton from './facebookButton';
import {IndexLink, Link} from 'react-router';
import Avatar from 'material-ui/lib/avatar';

export default ({auth, user}) => {
    return (
      <div className="mdl-layout__drawer mdl-layout--small-screen-only">
        <span className="mdl-layout-title">Recomea</span>
        { auth.isAuthenticated ?
          <nav className="mdl-navigation">
            <IndexLink to="/" className="mdl-navigation__link">Home</IndexLink>
            <Link to="/top" className="mdl-navigation__link">Top</Link>
            <Link to="/likes" className="mdl-navigation__link">Likes</Link>
            <Link to="/create" className="mdl-navigation__link">Create</Link>
            <Link to="/profile" className="mdl-navigation__link">Profile</Link>
          </nav>
            :
          <nav className="mdl-navigation">
            <div style={{padding: '5px'}}>
              <FacebookButton />
            </div>
          </nav> }
      </div>
    );
}
