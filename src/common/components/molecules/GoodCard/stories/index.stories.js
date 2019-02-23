import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import GoodCard from '../index';

storiesOf('molecules', module).add('GoodCard', () => (
  <GoodCard
    name={text('name', 'Flower in a bowl')}
    mainImageUrl={text(
      'mainImageUrl',
      'http://flowersandmorebyerin.com/wp-content/uploads/2015/02/pFlower3.png'
    )}
    price={number('price', 95)}
    priceCurrency="UAH"
    sellerInfo={{ storeName: text('storeName', 'Gold stuff shopping') }}
    onPurchase={action('onPurchase')}
  />
));
