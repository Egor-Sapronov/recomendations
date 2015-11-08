import React from 'react';
import Embed from './embed';

export default (props) => {
    return (
        <div>
            {props.data.map(item => <Embed key={ item._id } {...item} />)}
        </div>
    );
};
