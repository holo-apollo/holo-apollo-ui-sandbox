import React from 'react';
import { withRouter } from 'next/router';

import PureHomePageLayout from './PureHomePageLayout';

const NotEnchancedHomePageLayout = ({ router }) => (
  <PureHomePageLayout unsubscribeToken={router.query.token} />
);

const HomePageLayout = withRouter(NotEnchancedHomePageLayout);

export default HomePageLayout;
