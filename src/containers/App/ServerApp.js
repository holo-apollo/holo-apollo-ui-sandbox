import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Capture } from 'react-loadable';

import addIntl from 'helpers/addIntl';
import App from 'containers/App';

const ServerApp = ({ report, context, location, language }) => {
  const appWithIntl = addIntl(App, language);
  return (
    <Capture report={report}>
      <StaticRouter context={context} location={location}>
        {appWithIntl}
      </StaticRouter>
    </Capture>
  );
};

export default ServerApp;
