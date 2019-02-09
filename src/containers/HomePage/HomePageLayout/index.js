import React from 'react';
import queryString from 'query-string';

import PureHomePageLayout from './PureHomePageLayout';

const HomePageLayout = props => (
  <PureHomePageLayout
    unsubscribeToken={queryString.parse(props.location.search).token}
    {...props}
  />
);

export default HomePageLayout;
