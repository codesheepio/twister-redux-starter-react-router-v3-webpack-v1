const path = require('path')
const webpack = require('webpack') // eslint-disable-line

module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack/hot/only-dev-server',
    'webpack-hot-middleware/client',
    './index.js',
  ],
  output: {
    filename: 'bundle.js',
    path: path.resolve('../dist'),
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
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url',
      },
    ],
  },
  plugins: [
    new webpack.optimize.OccurenceOrderPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin(),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
  },
}
