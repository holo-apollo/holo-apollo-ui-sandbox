import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number, boolean } from '@storybook/addon-knobs';
import { action } from '@storybook/addon-actions';

import OrderGoodCard from '../index';

storiesOf('molecules', module).add('OrderGoodCard', () => (
  <div style={{ width: '750px' }}>
    <OrderGoodCard
      isEditable={boolean('isEditable', true)}
      id={1}
      name={text('name', 'Flower in a bowl')}
      mainImageUrl={text(
        'mainImageUrl',
        'http://flowersandmorebyerin.com/wp-content/uploads/2015/02/pFlower3.png'
      )}
      price={number('price', 95)}
      priceCurrency="UAH"
      discount={number('discount', 0)}
      specifications={{
        color: 'White',
        size: '10x15 cm',
      }}
      onRemove={action('onRemove')}
      onQuantityChange={action('onQuantityChange')}
      quantity={2}
    />
  </div>
));
