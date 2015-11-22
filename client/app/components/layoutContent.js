import React from 'react';

export default props => (
  <div className="page-content" >
    <div className="mdl-grid" >
      <div className="mdl-layout-spacer" />
      <div className="mdl-cell mdl-cell--7-col-desktop mdl-cell--12-col-tablet mdl-cell--12-col-phone" >
        { props.children }
      </div>
      <div className= "mdl-layout-spacer" />
    </div>
  </div>
);
