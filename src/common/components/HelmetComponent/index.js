import React from 'react';
import Helmet from 'react-helmet';

import withIntl from 'lib/withIntl';
import messages from './messages';

const HelmetComponent = ({ intl }) => (
  <Helmet
    meta={[
      {
        name: 'description',
        content: intl.formatMessage(messages.description),
      },
    ]}
  />
);

export default withIntl(HelmetComponent);
