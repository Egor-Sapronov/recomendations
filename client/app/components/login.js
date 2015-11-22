import React from 'react';
import Featured from '../containers/featured';
import FacebookButton from './facebookButton';

export default () => {
    return (
        <div>
            <div
              className="logo-font logo-slogan mdl-typography--text-center">
              Try Recomea now!
            </div>
            <div
              className="logo-font logo-sub-slogan mdl-typography--text-center">
              Recomea gives you an opportunity to share something with the whole world.
            </div>
            <div className="mdl-grid">
                <div className="mdl-layout-spacer" />
                <FacebookButton />
                <div className="mdl-layout-spacer" />
            </div>
            <div className="mdl-grid">
                <Featured id={`${process.env.FEATURED_POST}`} />
            </div>
        </div>
    );
};
