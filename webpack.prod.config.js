const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglify-es-webpack-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
});

module.exports = {
  entry: './src/app.js',
  output: {
    path: path.resolve(__dirname, 'static/bundles'),
    filename: '[name].[hash].bundle-prod.js',
    publicPath: '/bundles/',
  },
  plugins: [
    definePlugin,
    new StatsWriterPlugin({ filename: '../../webpack-stats-prod.json' }),
    new ReactLoadablePlugin({
      filename: './react-loadable-stats-prod.json',
    }),
  ],
  optimization: {
    minimizer: [new UglifyJsPlugin()],
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
    ],
  },
  mode: 'production',
};
