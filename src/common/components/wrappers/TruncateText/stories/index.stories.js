// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';

import TruncateText from '../index';

storiesOf('wrappers', module).add('TruncateText', () => (
  <div style={{ width: '530px' }}>
    <TruncateText
      children={text(
        'children',
        'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. In hac habitasse platea dictumst quisque sagittis. Amet luctus venenatis lectus magna fringilla urna porttitor rhoncus.'
      )}
      lineHeight={number('lineHeight', 1.15)}
      maxLines={number('maxLines', 2)}
      ellipsis={text('ellipsis', '...')}
    />
  </div>
));
