import React, { PureComponent } from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'connected-react-router';
import { Frontload } from 'react-frontload';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import addIntl from 'helpers/addIntl';
import theme from 'common/theme';
import App from 'containers/App';
import configureStore from 'store/configureStore';

const { store, history } = configureStore();

const generateClassName = createGenerateClassName();

class FrontendApp extends PureComponent {
  // Remove the server-side injected CSS.
  componentDidMount() {
    const jssStyles = document.getElementById('jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <Frontload noServerRender={true}>
            <JssProvider generateClassName={generateClassName}>
              <MuiThemeProvider theme={theme}>
                {addIntl(App, document.documentElement.lang || 'en')}
              </MuiThemeProvider>
            </JssProvider>
          </Frontload>
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default FrontendApp;
