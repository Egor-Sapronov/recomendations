const webpack = require('webpack');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
    devtool: 'source-map',
    context: `${__dirname}/client/app`,
    entry: {
        index: ['babel-core/polyfill', './index.js'],
    },
    output: {
        path: `${__dirname}/build`,
        filename: '[name].js',
        publicPath: '/static/',
    },
    plugins: [
        new ExtractTextPlugin('index.css'),
        new webpack.optimize.OccurenceOrderPlugin(),
        new webpack.optimize.DedupePlugin(),
        new webpack.optimize.UglifyJsPlugin({
            compressor: {
                warnings: false,
            },
        }),
        new webpack.DefinePlugin({
            'process.env': {
                NODE_ENV: JSON.stringify(process.env.NODE_ENV),
                APP_HOST: JSON.stringify(process.env.APP_HOST),
                FEATURED_POST: JSON.stringify(process.env.FEATURED_POST),
            },
        }),
    ],
    module: {
        loaders: [
            {
                test: /\.css$/,
                loader: ExtractTextPlugin.extract('style-loader', 'css-loader'),
            },
            {
                test: /\.js$/,
                exclude: /(node_modules)/,
                loader: 'babel-loader',
            }, {
                test: /\.(ttf|eot|svg|woff(2)?)(\?[a-z0-9]+)?$/,
                loader: 'file-loader',
            }],
    },
};
