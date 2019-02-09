const path = require('path');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

module.exports = {
  devtool: 'eval',
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'static/bundles'),
    filename: '[name].[hash].bundle-dev.js',
    publicPath: '/bundles/',
  },
  plugins: [
    new StatsWriterPlugin({ filename: '../../webpack-stats-dev.json' }),
    new ReactLoadablePlugin({
      filename: './react-loadable-stats-dev.json',
    }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'commons',
    },
  },
  resolve: {
    modules: [path.resolve('./src'), path.resolve('./node_modules')],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        loader: 'eslint-loader',
      },
      {
        test: /\.(png|woff|woff2|eot|otf|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
      },
    ],
  },
  mode: 'development',
};
