import React from 'react';

export default props => (
  <div className="page-content" >
    <div className="mdl-grid" >
      <div className="mdl-layout-spacer" />
      <div className="mdl-cell mdl-cell--7-col-desktop mdl-cell-12-tablet mdl-cell-12-phone" >
        { props.children }
      </div>
      <div className= "mdl-layout-spacer" />
    </div>
  </div>
);
