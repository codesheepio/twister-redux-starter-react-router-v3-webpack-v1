const path = require('path')
const webpack = require('webpack') // eslint-disable-line
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const PurifyCSSPlugin = require('purifycss-webpack-plugin')
module.exports = {
  entry: {
    app: path.resolve('client/index.js'),
    vendors: ['react', 'react-dom', 'react-redux', 'react-router', 'redux', 'redux-form', 'redux-router', 'redux-thunk'],
  },
  output: {
    filename: '[name].js',
    path: path.resolve('./dist'),
    publicPath: '/dist/',
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loaders: ['babel', 'webpack-module-hot-accept'],
      },
      {
        test: /\.scss$/,
        exclude: /node_modules/,
        loader: ExtractTextPlugin.extract('style', 'css!sass'),
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url',
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendors', 'manifest']
    }),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
    new ExtractTextPlugin('styles.css'),
    new PurifyCSSPlugin({
      basePath: process.cwd(),
    }),
  ],
}
