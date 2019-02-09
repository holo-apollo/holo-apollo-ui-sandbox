import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import Helmet from 'react-helmet';

import GlobalStyle from 'common/GlobalStyle';
import theme from 'common/theme';
import Application from 'containers/Application';
import HomePage from 'containers/HomePage';
import messages from './messages';

const App = ({ intl }) => (
  <MuiThemeProvider theme={theme}>
    <GlobalStyle />
    <Helmet>
      <meta
        name="description"
        content={intl.formatMessage(messages.description)}
      />
    </Helmet>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/application" exact component={Application} />
    </Switch>
  </MuiThemeProvider>
);

export default App;
