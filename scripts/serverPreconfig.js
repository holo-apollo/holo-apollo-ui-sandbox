require('dotenv').load();

require('@babel/register')({
  presets: ['@babel/preset-env', '@babel/preset-react'],
  plugins: ['dynamic-import-node'],
});

const ignore = require('ignore-styles');
ignore.default([...ignore.DEFAULT_EXTENSIONS, '.ico', '.ttf']);
