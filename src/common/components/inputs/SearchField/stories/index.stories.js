// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import SearchField from '../index';

storiesOf('Inputs', module).add('SearchField', () => (
  <div style={{ width: '420px' }}>
    <SearchField
      placeholder={text('placeholder', 'Search')}
      onSearch={action('onSearch')}
    />
  </div>
));
