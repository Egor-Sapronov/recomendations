import React from 'react';
import CardHeader from 'material-ui/lib/card/card-header';
import { Link } from 'react-router';

export default (props) => {
    return (
        <div className="mdl-card__title">
            <Link to={ `/profile/${props._id}` }>
                <CardHeader
                    style={{ padding: '0', height: 'auto' }}
                    title={ props.displayName }
                    subtitle={ `${props.location} - ${props.displayDate}` }
                    avatar={ `https://graph.facebook.com/${props.providerId}/picture?&type=large` }
                />
            </Link>
        </div>
    );
};
