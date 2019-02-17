function setup(app) {
  const isProd = process.env.NODE_ENV === 'production';

  if (!isProd) {
    const webpackConfig = require('../webpack/dev.config');
    const addDevMiddlewares = require('./middlewares/addDevMiddlewares');
    addDevMiddlewares(app, webpackConfig);
  }

  app.set('view engine', 'ejs');

  return app;
}

export default setup;
