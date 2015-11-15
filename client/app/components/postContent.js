import React from 'react';
import Embed from './embed';
import PostText from './postText';

export default ({data, content}) => {
    return (
        <div className="mdl-card__supporting-text" style={{ width: 'auto' }}>
            {data.map(item => <Embed key={ item._id } { ...item } />)}
            <PostText content={ content } />
        </div>
    );
};
