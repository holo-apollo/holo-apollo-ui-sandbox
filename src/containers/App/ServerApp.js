import React from 'react';
import { StaticRouter } from 'react-router-dom';
import { Capture } from 'react-loadable';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import addIntl from 'helpers/addIntl';
import theme from 'common/theme';
import App from 'containers/App';

const ServerApp = ({ report, context, location, language, sheetsRegistry }) => {
  const appWithIntl = addIntl(App, language);
  const generateClassName = createGenerateClassName();
  const sheetsManager = new Map();
  return (
    <Capture report={report}>
      <StaticRouter context={context} location={location}>
        <JssProvider
          registry={sheetsRegistry}
          generateClassName={generateClassName}
        >
          <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
            {appWithIntl}
          </MuiThemeProvider>
        </JssProvider>
      </StaticRouter>
    </Capture>
  );
};

export default ServerApp;
