import React, { Fragment } from 'react';
import { Switch, Route } from 'react-router-dom';
import Helmet from 'react-helmet';

import Application from 'containers/Application';
import HomePage from 'containers/HomePage';
import messages from './messages';

const App = ({ intl }) => (
  <Fragment>
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
  </Fragment>
);

export default App;
