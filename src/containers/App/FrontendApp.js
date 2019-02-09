import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import addIntl from 'helpers/addIntl';
import App from 'containers/App';

const FrontendApp = (
  <BrowserRouter>
    {addIntl(App, document.documentElement.lang || 'en')}
  </BrowserRouter>
);

export default FrontendApp;
