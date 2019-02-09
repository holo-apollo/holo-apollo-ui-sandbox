import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { preloadAll, Capture } from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';

import App from 'containers/App';

const isProd = process.env.NODE_ENV === 'production';
const suffix = isProd ? 'prod' : 'dev';
const webpackStats = require(`../webpack-stats-${suffix}.json`);
const reactLoadableStats = require(`../react-loadable-stats-${suffix}.json`);

function getBundlePath(bundleName) {
  const bundleFileName = webpackStats.assetsByChunkName[bundleName];
  return `/bundles/${bundleFileName}`;
}

const app = express();

app.set('view engine', 'ejs');

if (process.env.NODE_ENV === 'development') {
  const staticDir = path.resolve(__dirname, `../static`);
  app.use(express.static(staticDir));
}

app.get('/*', (req, res) => {
  const context = {};
  const modules = [];
  const jsx = (
    <Capture report={moduleName => modules.push(moduleName)}>
      <StaticRouter context={context} location={req.url}>
        <App />
      </StaticRouter>
    </Capture>
  );

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  const reactDom = renderToString(jsx);

  const bundles = getBundles(reactLoadableStats, modules);
  const bundlePaths = [
    ...bundles.map(bundle => bundle.publicPath),
    getBundlePath('main'),
    getBundlePath('commons'),
  ];
  const staticRoot = process.env.STATIC_ROOT || '';

  res.render('index', { reactDom, bundlePaths, staticRoot });
});

preloadAll()
  .then(() => {
    app.listen(process.env.PORT, () => {
      // eslint-disable-next-line no-console
      console.log('Server has started');
    });
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
