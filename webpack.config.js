var path = require('path')
var webpack = require('webpack')
module.exports = {
  devtool: 'source-map',
  entry: [
    'webpack-dev-server/client?http://localhost:8080',
    'webpack/hot/only-dev-server',
    './src/index.js',
  ],
  output: {
    filename: 'bundle.js',
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
        loaders: ['style', 'css', 'sass'],
      },
      {
        test: /\.(png|woff|woff2|eot|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url',
      },
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
  ],
  devServer: {
    hot: true,
    historyApiFallback: true,
  }
}