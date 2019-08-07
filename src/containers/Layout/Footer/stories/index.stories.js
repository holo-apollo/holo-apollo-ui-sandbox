// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';
import { boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import Footer from '../index';
import { categories } from '../../mocks';

storiesOf('Layout', module).add('Footer', () => (
  <Footer
    categories={categories}
    isAuthenticated={boolean('isAuthenticated', false)}
    onLoginClick={action('onLoginClick')}
    onSignupClick={action('onSignupClick')}
  />
));
