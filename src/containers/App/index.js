import React from 'react';
import { Switch, Route } from 'react-router-dom';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { IntlProvider, addLocaleData } from 'react-intl';

import GlobalStyle from 'common/GlobalStyle';
import theme from 'common/theme';
import Application from 'containers/Application';
import HomePage from 'containers/HomePage';
import localeData from '../../../i18n/locale/data.json';

// TODO: move language detection to redux
const language = 'en';
const messages = localeData[language] || localeData.en;

import(`react-intl/locale-data/${language}`).then(data => {
  addLocaleData(data);
});

const App = () => (
  <IntlProvider locale={language} messages={messages}>
    <MuiThemeProvider theme={theme}>
      <GlobalStyle />
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/application" exact component={Application} />
      </Switch>
    </MuiThemeProvider>
  </IntlProvider>
);

export default App;
