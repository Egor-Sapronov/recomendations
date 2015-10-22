import React from 'react';

export default props => (
  <div className="page-content" >
    <div className="mdl-grid" >
      <div className="mdl-cell mdl-cell--4-col" />
      <div className="mdl-cell mdl-cell--4-col" >
        { props.children }
      </div>
      <div className= "mdl-cell mdl-cell--4-col" />
    </div>
  </div>
);
