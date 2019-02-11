import express from 'express';
import { preloadAll } from 'react-loadable';

import setup from './setup';
const getViewContext = require('./getViewContext');

const app = express();

setup(app);

app.get('/*', (req, res) => {
  try {
    const context = {};
    const viewContext = getViewContext(req, context);
    if (context.url) {
      res.redirect(context.url);
      return;
    }
    res.render('index', viewContext);
  } catch (e) {
    console.error(e); // eslint-disable-line no-console
    // TODO: implement custom server error page
    res.send(500);
  }
});

preloadAll()
  .then(() => {
    app.listen(process.env.PORT, () => {
      // TODO: use logging middleware
      console.log('Server has started'); // eslint-disable-line no-console
    });
  })
  .catch(error => {
    console.log(error); // eslint-disable-line no-console
  });
