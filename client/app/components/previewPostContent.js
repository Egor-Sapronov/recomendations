import React from 'react';
import { Link } from 'react-router';

export default (props) => {
    return (
        <div className="mdl-card__supporting-text" style={{ width: 'auto' }}>
            {props.linkedContent ? <Link style={{textDecoration: 'none', color: 'rgba(0,0,0, 0.87)'}} to={`/recomendation/${props._id}`}>
                <div
                    className="mdl-typography--display-1"
                    style={{fontWeight: '200'}}
                    dangerouslySetInnerHTML={{ __html: props.linkedContent}}
                />
            </Link> : '' }
        </div>
    );
};
