import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import { preloadAll, Capture } from 'react-loadable';
import { getBundles } from 'react-loadable/webpack';
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';

import addIntl from 'helpers/addIntl';
import App from 'containers/App';
import setup from './setup';

const isProd = process.env.NODE_ENV === 'production';
const suffix = process.env.NODE_ENV;
const webpackStats = require(`../webpack-stats-${suffix}.json`);
const reactLoadableStats = require(`../react-loadable-stats-${suffix}.json`);

function getBundlePath(bundleName) {
  const bundleFileName = webpackStats.assetsByChunkName[bundleName];
  return `/bundles/${bundleFileName}`;
}

const app = express();

setup(app);

app.get('/*', (req, res) => {
  const context = {};
  const modules = [];
  const lang = req.acceptsLanguages('en', 'ru', 'uk') || 'en';
  const appWithIntl = addIntl(App, lang);

  const jsx = (
    <Capture report={moduleName => modules.push(moduleName)}>
      <StaticRouter context={context} location={req.url}>
        {appWithIntl}
      </StaticRouter>
    </Capture>
  );

  if (context.url) {
    res.redirect(context.url);
    return;
  }

  const sheet = new ServerStyleSheet();
  const reactDom = renderToString(sheet.collectStyles(jsx));
  const styleTags = sheet.getStyleTags();

  const bundles = getBundles(reactLoadableStats, modules);
  const bundlePaths = [
    ...bundles.map(bundle => bundle.publicPath),
    getBundlePath('commons'),
    getBundlePath('main'),
  ];
  const staticRoot = process.env.STATIC_ROOT || '';
  const helmetData = Helmet.renderStatic();

  res.render('index', {
    reactDom,
    bundlePaths,
    staticRoot,
    isProd,
    lang,
    helmetData,
    styleTags,
  });
});

preloadAll()
  .then(() => {
    app.listen(process.env.PORT, () => {
      // TODO: use logging middleware
      // eslint-disable-next-line no-console
      console.log('Server has started');
    });
  })
  .catch(error => {
    // eslint-disable-next-line no-console
    console.log(error);
  });
