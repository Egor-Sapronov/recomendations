import React from 'react';
import PostHeader from './postHeader';
import PreviewPostContent from './previewPostContent';

export default (props) => {
    return (
            <div style={{width: '100%'}} className="mdl-card">
                <PostHeader { ...props._user } />
                <PreviewPostContent { ...props } />
            </div>
    );
};
