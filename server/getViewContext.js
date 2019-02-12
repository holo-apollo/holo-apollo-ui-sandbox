import React from 'react';
import { renderToString } from 'react-dom/server';
import { getBundles } from 'react-loadable/webpack';
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';
import { SheetsRegistry } from 'jss';

import ServerApp from 'containers/App/ServerApp';

const isProd = process.env.NODE_ENV === 'production';
const suffix = process.env.NODE_ENV;

const webpackStats = require(`../webpack/stats-${suffix}.json`);
const reactLoadableStats = require(`../webpack/loadable-stats-${suffix}.json`);

function getBundlePath(bundleName) {
  const bundleFileName = webpackStats.assetsByChunkName[bundleName];
  return `/bundles/front/${bundleFileName}`;
}

module.exports = function(req, context) {
  const sheetsRegistry = new SheetsRegistry();
  const modules = [];
  const lang = req.acceptsLanguages('en', 'ru', 'uk') || 'en';

  const jsx = (
    <ServerApp
      report={moduleName => modules.push(moduleName)}
      context={context}
      location={req.url}
      language={lang}
      sheetsRegistry={sheetsRegistry}
    />
  );

  const sheet = new ServerStyleSheet();
  const reactDom = renderToString(sheet.collectStyles(jsx));
  const styleTags = sheet.getStyleTags();

  const bundles = getBundles(reactLoadableStats, modules);
  const bundlePaths = [
    ...bundles
      .map(bundle => bundle.publicPath)
      .filter(
        bundlePath => bundlePath && !bundlePath.endsWith('hot-update.js')
      ),
    getBundlePath('commons'),
    getBundlePath('main'),
  ];
  const staticRoot = process.env.STATIC_ROOT || '';
  const helmetData = Helmet.renderStatic();
  const css = sheetsRegistry.toString();

  return {
    reactDom,
    bundlePaths,
    staticRoot,
    isProd,
    lang,
    helmetData,
    styleTags,
    css,
  };
};
