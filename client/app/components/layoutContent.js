import React from 'react';

export default props => (
  <div className="page-content" >
    <div className="mdl-grid" >
      <div className="mdl-layout-spacer" />
      <div className="mdl-cell mdl-cell--8-col mdl-cell-10-tablet mdl-cell-12-phone" >
        { props.children }
      </div>
      <div className= "mdl-layout-spacer" />
    </div>
  </div>
);
