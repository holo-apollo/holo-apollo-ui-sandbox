const path = require('path');
const webpack = require('webpack');
const UglifyJsPlugin = require('uglify-es-webpack-plugin');

const definePlugin = new webpack.DefinePlugin({
  'process.env': {
    NODE_ENV: JSON.stringify('production'),
  },
});

module.exports = require('./webpack.base.config')({
  mode: 'production',
  entry: [path.join(process.cwd(), './src/app.js')],
  output: {
    filename: '[name].[hash].bundle-production.js',
  },
  optimization: {
    minimizer: [new UglifyJsPlugin()],
    splitChunks: {
      chunks: 'all',
      name: 'commons',
    },
  },
  plugins: [definePlugin],
});
