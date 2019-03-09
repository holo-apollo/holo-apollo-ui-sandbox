// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, color, select } from '@storybook/addon-knobs';

import palette from 'common/palette';
import Triangle from '../index';

storiesOf('Icons', module).add('Triangle', () => (
  <div style={{ display: 'flex' }}>
    <Triangle
      height={number('height', 30)}
      color={color('color', palette.grey)}
      direction={select('direction', ['up', 'down', 'left', 'right'], 'up')}
    />
  </div>
));
