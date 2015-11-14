import React from 'react';
import Loader from './loader';
import PostPreview from './postPreview';

export default ({posts, isLoading}) => {
    return (
        <div>{isLoading ? <Loader /> :
            <div>
                {posts.map(item => <PostPreview key={item._id} {...item} />)}
            </div>}</div>
    );
};
