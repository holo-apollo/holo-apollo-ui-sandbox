/* eslint-disable global-require */

/**
 * Front-end middleware
 */
module.exports = app => {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const webpackConfig = require('../../webpack.dev.config');
    const addDevMiddlewares = require('./addDevMiddlewares');
    addDevMiddlewares(app, webpackConfig);
  }

  return app;
};
