import React from 'react';
import { Provider } from 'react-redux';
import { StaticRouter } from 'react-router-dom';
import { Capture } from 'react-loadable';
import { Frontload } from 'react-frontload';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import addIntl from 'helpers/addIntl';
import theme from 'common/theme';
import App from 'containers/App';

const ServerApp = ({
  report,
  context,
  location,
  language,
  sheetsRegistry,
  store,
}) => {
  const appWithIntl = addIntl(App, language);
  const generateClassName = createGenerateClassName();
  const sheetsManager = new Map();
  return (
    <Capture report={report}>
      <Provider store={store}>
        <StaticRouter context={context} location={location}>
          <Frontload>
            <JssProvider
              registry={sheetsRegistry}
              generateClassName={generateClassName}
            >
              <MuiThemeProvider theme={theme} sheetsManager={sheetsManager}>
                {appWithIntl}
              </MuiThemeProvider>
            </JssProvider>
          </Frontload>
        </StaticRouter>
      </Provider>
    </Capture>
  );
};

export default ServerApp;
