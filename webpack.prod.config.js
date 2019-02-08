const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglifyjs-webpack-plugin');
const { StatsWriterPlugin } = require('webpack-stats-plugin');

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
  },
  plugins: [
    definePlugin,
    new StatsWriterPlugin({ filename: 'webpack-stats-prod.json' }),
  ],
  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'commons',
    },
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
      {
        test: /\.(png|woff|woff2|eot|otf|ttf|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
        loader: 'url-loader',
      },
    ],
  },
  mode: 'production',
};
