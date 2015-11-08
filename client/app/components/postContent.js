import React from 'react';
import Embed from './embed';

export default (props) => {
    return (
        <div className="mdl-card__supporting-text">
            {props.data.map(item => <Embed key={ item._id } {...item} />)}
            {props.linkedContent ? <div dangerouslySetInnerHTML={{ __html: props.linkedContent}} /> : '' }
        </div>
    );
};
