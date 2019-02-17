import express from 'express';
import { preloadAll } from 'react-loadable';

import setup from './setup';
import loader from './loader';

const app = express();

setup(app);
app.use(loader);

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
