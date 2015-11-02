import React from 'react';

export default props => (
    <div>
        <a target="_blank" href={props.url}><h4>{props.title}</h4></a>
        <img style={{maxWidth:'100%', height: 'auto'}} src={props.thumbnail_url} />
        <p>{props.description}</p>
    </div>
);
