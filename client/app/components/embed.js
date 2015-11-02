import React from 'react';

export default props => (
    <div>
        <a target="_blank" href={props.url}><h4>{props.title}</h4></a>
        {(props.thumbnail_url && !props.html) ? <img style={{maxWidth:'100%', height: 'auto'}} src={props.thumbnail_url} /> : '' }
        {props.html ? <div dangerouslySetInnerHTML={{ __html: props.html }} /> : ''}
        <p>{props.description}</p>
    </div>
);
