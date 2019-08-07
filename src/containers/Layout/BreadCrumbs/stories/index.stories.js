// @flow
import React from 'react';
import { storiesOf } from '@storybook/react';

import BreadCrumbs from '../index';
import { crumbs } from '../../mocks';

storiesOf('Layout', module).add('BreadCrumbs', () => (
  <BreadCrumbs crumbs={crumbs} />
));
