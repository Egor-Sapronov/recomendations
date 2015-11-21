import React from 'react';

export default ({content}) => {
    return (
        <div
            className="mdl-typography--body-2"
            style={{fontWeight: '200', marginBottom: '5px'}}
        >{content}</div>
    );
};
