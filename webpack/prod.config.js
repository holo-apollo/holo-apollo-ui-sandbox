const UglifyJsPlugin = require('uglify-es-webpack-plugin');

module.exports = require('./base.config')({
  mode: 'production',
  entry: './src/app.js',
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
  plugins: [],
});
