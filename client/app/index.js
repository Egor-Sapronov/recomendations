require('material-design-lite/material.css');
require('material-design-lite/material.js');
require('./styles/index.css');
require('./styles/style.css');
import React from 'react';
import ReactDOM from 'react-dom';
import Root from './containers/root';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';

const store = configureStore({});

ReactDOM.render((<Provider store={ store } >
                  <Root />
                </Provider>), document.getElementById('root'));
