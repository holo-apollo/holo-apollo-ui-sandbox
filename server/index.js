import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from 'containers/App';

const app = express();

const STATIC_DIR_NAME = 'static';
const BUNDLES_DIR_NAME = 'bundles';
const isProd = process.env.NODE_ENV === 'production';
const webpackStats = require(`../${STATIC_DIR_NAME}/${BUNDLES_DIR_NAME}/webpack-stats-${
  isProd ? 'prod' : 'dev'
}.json`);

const staticDir = path.resolve(__dirname, `../${STATIC_DIR_NAME}`);

function getBundlePath(bundleName) {
  const bundleFileName = webpackStats.assetsByChunkName[bundleName];
  return `./${BUNDLES_DIR_NAME}/${bundleFileName}`;
}

app.use(express.static(staticDir));

app.get('/*', (req, res) => {
  const context = {};
  const jsx = (
    <StaticRouter context={context} location={req.url}>
      <App />
    </StaticRouter>
  );

  const reactDom = renderToString(jsx);

  res.writeHead(200, { 'Content-Type': 'text/html' });
  res.end(htmlTemplate(reactDom));
});

app.listen(process.env.PORT);
// eslint-disable-next-line no-console
console.log('Server has started');

function htmlTemplate(reactDom) {
  return `
    <!DOCTYPE html>
    <html>
    <head>
      <meta charset="utf-8">
      <title>Holo-Apollo</title>
    </head>
        
    <body>
      <div id="app">${reactDom}</div>
      <script src="${getBundlePath('main')}"></script>
      <script src="${getBundlePath('commons')}"></script>
    </body>
    </html>
  `;
}
