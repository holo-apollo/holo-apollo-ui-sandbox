// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { number, boolean, select } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Header from '../index';

const categories = [
  {
    slug: 'clothes',
    name: 'Clothes',
  },
  {
    slug: 'jewelry',
    name: 'Jewelry',
  },
  {
    slug: 'accessories',
    name: 'Accessories',
  },
  {
    slug: 'home_decor',
    name: 'Home decor',
  },
  {
    slug: 'shoes',
    name: 'Shoes',
  },
  {
    slug: 'art',
    name: 'Art',
  },
  {
    slug: 'other',
    name: 'Other',
  },
];

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
