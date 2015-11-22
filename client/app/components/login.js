import React from 'react';

export default () => {
    return (
        <div>
            <div className="mdl-grid" style={{paddingTop: '60px'}}>
                <div className="mdl-layout-spacer" />
                <p className="mdl-typography--display-3" style={{fontWeight: '200'}}>Try Recomea now!</p>
                <div className="mdl-layout-spacer" />
            </div>
            <div className="mdl-grid" style={{padding: '10px'}}>
                <div className="mdl-layout-spacer" />
                <p className="mdl-typography--body-2" style={{fontWeight: '400'}}>Recomea gives you an opportunity to share something with the whole world.</p>
                <div className="mdl-layout-spacer" />
            </div>
            <div className="mdl-grid" style={{padding: '20px'}}>
                <div className="mdl-layout-spacer" />
                <a href="/facebook" className="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--raised mdl-button--colored">
                    <i className="icon-facebook2" style={{marginRight: '10px'}} />
                    signin with facebook
                </a>
                <div className="mdl-layout-spacer" />
            </div>
        </div>
    );
};
