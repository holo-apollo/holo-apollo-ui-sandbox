const path = require('path');
const dotenv = require('dotenv');
const { StatsWriterPlugin } = require('webpack-stats-plugin');
const { ReactLoadablePlugin } = require('react-loadable/webpack');

dotenv.config();

module.exports = options => ({
  mode: options.mode,
  devtool: options.devtool,
  entry: options.entry,
  output: Object.assign(
    {
      path: path.resolve(__dirname, 'static/bundles'),
      publicPath: '/bundles/',
    },
    options.output
  ),
  optimization: options.optimization,
  plugins: options.plugins.concat([
    new StatsWriterPlugin({
      filename: `../../webpack-stats-${options.mode}.json`,
    }),
    new ReactLoadablePlugin({
      filename: `./react-loadable-stats-${options.mode}.json`,
    }),
  ]),
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
});
