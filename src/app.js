import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

import App from 'containers/App';

const app = document.getElementById('app');
ReactDOM.hydrate(
  <BrowserRouter>
    <App />
  </BrowserRouter>,
  app
);
