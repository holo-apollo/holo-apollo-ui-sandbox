// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import IncrementField from '../index';

storiesOf('Inputs', module).add('IncrementField', () => (
  <IncrementField
    initialValue={number('initialValue', 0)}
    maxValue={number('maxValue', 10)}
    minValue={number('minValue', -10)}
    step={number('step', 1)}
    onChange={action('onChange')}
    isPercent={boolean('isPercent', false)}
  />
));
