import React from 'react';
import { Link } from 'react-router';
import PostText from './postText';

export default ({content, _id, data}) => {
    return (
        <div className="mdl-card__supporting-text" style={{ width: 'auto' }}>
            <Link style={{textDecoration: 'none', color: 'rgba(0,0,0, 0.87)'}} to={ `/recomendation/${_id}` }>
                <PostText content={ content }/>
                {data.map(item => {
                    return (
                        <div>
                            {item.thumbnail_url ? <img style={{maxWidth:'100%', height: 'auto'}} src={item.thumbnail_url} /> : '' }
                        </div>
                    );
                })}
            </Link>
        </div>
    );
};
