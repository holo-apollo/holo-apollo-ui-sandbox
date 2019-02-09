const path = require('path');
const webpack = require('webpack');

module.exports = require('./webpack.base.config')({
  mode: 'development',

  // Emit a source map for easier debugging
  devtool: 'eval-source-map',

  // Add hot reloading in development
  entry: [
    'webpack-hot-middleware/client?reload=true',
    path.join(process.cwd(), './src/app.js'),
  ],

  // Don't use hashes in dev mode for better performance
  output: {
    filename: `[name].bundle-development.js`,
  },

  optimization: {
    splitChunks: {
      chunks: 'all',
      name: 'commons',
    },
  },

  plugins: [
    new webpack.HotModuleReplacementPlugin(), // Tell webpack we want hot reloading
    new webpack.NoEmitOnErrorsPlugin(),
  ],
});
