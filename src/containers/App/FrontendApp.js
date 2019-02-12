import React, { PureComponent } from 'react';
import { BrowserRouter } from 'react-router-dom';
import JssProvider from 'react-jss/lib/JssProvider';
import {
  MuiThemeProvider,
  createGenerateClassName,
} from '@material-ui/core/styles';

import addIntl from 'helpers/addIntl';
import theme from 'common/theme';
import App from 'containers/App';

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
      <BrowserRouter>
        <JssProvider generateClassName={generateClassName}>
          <MuiThemeProvider theme={theme}>
            {addIntl(App, document.documentElement.lang || 'en')}
          </MuiThemeProvider>
        </JssProvider>
      </BrowserRouter>
    );
  }
}

export default FrontendApp;
