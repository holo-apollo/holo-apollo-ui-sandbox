import React from 'react';
import { storiesOf } from '@storybook/react';
import { color, number } from '@storybook/addon-knobs';

import palette from 'common/palette';
import Facebook from '../index';

storiesOf('Icons', module).add('Facebook', () => (
  <Facebook
    height={number('Height', 50)}
    color={color('Color', palette.darkGrey)}
  />
));
