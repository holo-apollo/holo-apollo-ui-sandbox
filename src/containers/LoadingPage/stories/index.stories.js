import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import LoadingPage from '../index';

storiesOf('containers', module).add('LoadingPage', () => (
  <LoadingPage
    error={boolean('error', false)}
    timedOut={boolean('timedOut', false)}
    pastDelay={boolean('pastDelay', true)}
    retry={action('retry')}
  />
));
