import express from 'express';
import path from 'path';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';

import App from '../src/containers/App';

const app = express();

const bundleDir =
  process.env.NODE_ENV === 'production' ? '../build' : '../dist';

app.use(express.static(path.resolve(__dirname, bundleDir)));

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
      <title>React SSR</title>
    </head>
        
    <body>
      <div id="app">${reactDom}</div>
      <script src="./main.bundle.js"></script>
      <script src="./commons.bundle.js"></script>
    </body>
    </html>
  `;
}
