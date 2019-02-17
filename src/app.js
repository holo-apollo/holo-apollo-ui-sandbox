import React from 'react';
import ReactDOM from 'react-dom';
import { preloadReady } from 'react-loadable';

import FrontendApp from 'containers/App/FrontendApp';

preloadReady().then(() => {
  ReactDOM.hydrate(<FrontendApp />, document.getElementById('app'));
});
