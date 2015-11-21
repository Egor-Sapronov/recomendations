import React from 'react';
import PostHeader from './postHeader';
import PreviewPostContent from './previewPostContent';
import PostShare from './postShare';
import Embed from './embed';
import PreviewPostActions from './previewPostActions';

export default (props) => {
    return (
            <div style={{width: '100%', marginBottom: '35px'}} className="mdl-card">
                <PostHeader { ...props._user } displayDate={ props.displayDate } />
                <PostShare { ...props } />
                <PreviewPostContent { ...props } />
                <PreviewPostActions { ...props } />
                <div className="line" />
            </div>
    );
};
