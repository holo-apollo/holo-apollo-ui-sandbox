import React from 'react';
import { renderToString } from 'react-dom/server';
import { frontloadServerRender } from 'react-frontload';
import { getBundles } from 'react-loadable/webpack';
import Helmet from 'react-helmet';
import { ServerStyleSheet } from 'styled-components';
import { SheetsRegistry } from 'jss';

import ServerApp from 'containers/App/ServerApp';
import configureStore from 'store/configureStore';
import { setLanguage } from 'containers/Language/actions';

const isProd = process.env.NODE_ENV === 'production';
const suffix = process.env.NODE_ENV;

const webpackStats = require(`../webpack/stats-${suffix}.json`);
const reactLoadableStats = require(`../webpack/loadable-stats-${suffix}.json`);

function getBundlePath(bundleName) {
  const bundleFileName = webpackStats.assetsByChunkName[bundleName];
  return `/bundles/front/${bundleFileName}`;
}

export default async function(req, context) {
  const lang = req.acceptsLanguages('en', 'ru', 'uk') || 'en';
  const { store } = configureStore(req.url);
  store.dispatch(setLanguage(lang));

  const sheetsRegistry = new SheetsRegistry();
  const modules = [];

  const jsx = (
    <ServerApp
      report={moduleName => modules.push(moduleName)}
      context={context}
      location={req.url}
      language={lang}
      sheetsRegistry={sheetsRegistry}
      store={store}
    />
  );

  const sheet = new ServerStyleSheet();
  const reactDom = await frontloadServerRender(() =>
    renderToString(sheet.collectStyles(jsx))
  );
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

  const state = JSON.stringify(store.getState()).replace(/</g, '\\u003c');

  return {
    reactDom,
    bundlePaths,
    staticRoot,
    isProd,
    lang,
    helmetData,
    styleTags,
    css,
    state,
  };
}
