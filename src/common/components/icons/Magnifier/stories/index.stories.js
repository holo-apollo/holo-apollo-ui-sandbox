import React from 'react';
import { storiesOf } from '@storybook/react';
import { color, number } from '@storybook/addon-knobs';

import palette from 'common/palette';
import Magnifier from '../index';

storiesOf('Icons', module).add('Magnifier', () => (
  <Magnifier
    height={number('Height', 50)}
    color={color('Color', palette.darkGrey)}
  />
));
