import React from 'react';
import { Link } from 'react-router';

export default (props) => {
    return (
        <div>
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
