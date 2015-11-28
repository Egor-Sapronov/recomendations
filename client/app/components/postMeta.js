import React from 'react';
import Helmet from 'react-helmet';

export default ({url, description, image, title}) => {
    return (
        <Helmet
            meta={[
                {'property': 'fb:app_id', 'content': process.env.FACEBOOK_APP_ID},
                {'property': 'og:type', 'content': 'article'},
                {'property': 'og:url', 'content': url},
                {'property': 'og:title', 'content': title},
                {'property': 'og:description', 'content': description},
                {'property': 'og:image', 'content': image},
            ]}
        />
    );
};
