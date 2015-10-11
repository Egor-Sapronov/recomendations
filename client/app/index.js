require('material-design-lite/material.css');
require('material-design-lite/material.js');
require('../css/index.css');
require('webpack-hot-middleware/client');
import React from 'react';
import CreateRecomendation from './containers/create.recomendation.js';

React.render(<CreateRecomendation />, document.getElementById('root'));
