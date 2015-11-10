import React from 'react';
import Loader from '../components/loader';

export default (props) => {
    return (
        <div>{props.isLoading ? <Loader /> :
            <div>
                {props.posts.map(item => <div key={item._id}>{item._id}</div>)}
            </div>}</div>
    );
};
