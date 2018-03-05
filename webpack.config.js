// eslint-disable-next-line
const webpack = require('webpack');

module.exports = {
  entry: [
    './src/App/Root.jsx',
  ],
  output: {
    path: __dirname,
    filename: 'bundle.js',
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: ['*', '.js', '.jsx'],
  },
  watchOptions: {
    poll: 1000,
  },
  devServer: {
    historyApiFallback: {
      index: '/',
    },
  },
};
