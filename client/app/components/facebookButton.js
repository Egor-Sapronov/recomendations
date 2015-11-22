import React from 'react';

export default ({name}) => {
    return (
      <a href="/facebook" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored mdl-typography--text-lowercase">
          <i className="icon-facebook2" style={{marginRight: '10px'}} />
          { name ? name : 'log in with facebook' }
      </a>
    );
};
