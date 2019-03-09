// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Header from '../index';
import { categories } from '../../mocks';

storiesOf('Layout', module).add('Header', () => (
  <Header
    categories={categories}
    isAuthenticated={boolean('isAuthenticated', false)}
    goodOrdersCount={number('goodOrdersCount', 29)}
    onLoginClick={action('onLogin')}
    onSignUpClick={action('onSignUpClick')}
    activeCategory={select(
      'activeCategory',
      ['all'].concat(categories.map(c => c.slug)).concat('sale'),
      'all'
    )}
  />
));
