/* global __dirname */
'use strict';

let path = require('path');
let BowerWebpackPlugin = require('bower-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');
let webpack = require('webpack');

module.exports = {
  context: path.join(__dirname, 'web/src'),
  entry: {
    index: './index.js'
  },
  output: {
    path: path.join(__dirname, 'web/dist'),
    filename: '[name].js'
  },
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  module: {
    loaders: [
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style-loader', 'css-loader')
      },
      {
        test: /\.png$/,
        loader: "url-loader?limit=100000"
      },
      {
        test: /\.jpg$/,
        loader: "file-loader"
      },
      {
        test: /\.woff2$/,
        loader: "url?limit=10000&minetype=application/font-woff2"
      },
      {
        test: /\.woff$/,
        loader: "url?limit=10000&minetype=application/font-woff"
      },
      {
        test: /\.ttf$/,
        loader: "url?limit=10000&minetype=application/octet-stream"
      },
      {
        test: /\.eot$/,
        loader: "file"
      },
      {
        test: /\.svg$/,
        loader: "url?limit=10000&minetype=image/svg+xml"
      },
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel-loader'
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  plugins: [
    new ExtractTextPlugin("[name].css"),
    new BowerWebpackPlugin({
      modulesDirectories: ['bower_components'],
      manifestFiles: ['bower.json', '.bower.json'],
      includes: /.*/,
      excludes: /.*\.less$/
    })
  ]
};