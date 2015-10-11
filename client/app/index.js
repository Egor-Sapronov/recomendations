require('material-design-lite/material.css');
require('material-design-lite/material.js');
require('../css/index.css');
require('webpack-hot-middleware/client');
import React from 'react';
import Root from './containers/root';

React.render(<Root />, document.getElementById('root'));
