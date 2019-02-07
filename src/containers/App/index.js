import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import styled from 'styled-components';

import Application from '../Application';
import HomePage from '../HomePage';

const Cont = styled.div``;

const LinksCont = styled.div`
  display: flex;

  a {
    margin-right: 20px;
  }
`;

const App = () => (
  <Cont>
    <LinksCont>
      <Link to="/">Home</Link>
      <Link to="/application">Application</Link>
    </LinksCont>
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/application" exact component={Application} />
    </Switch>
  </Cont>
);

export default App;
