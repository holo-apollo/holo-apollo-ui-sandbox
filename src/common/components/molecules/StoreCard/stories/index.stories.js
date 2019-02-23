import React from 'react';
import { storiesOf } from '@storybook/react';
import { text, number } from '@storybook/addon-knobs';

import StoreCard from '../index';

storiesOf('molecules', module).add('StoreCard', () => (
  <div>
    <div style={{ width: '640px', marginBottom: '30px' }}>
      <StoreCard
        isSmall={true}
        storeName={text('storeName', 'Armonie')}
        location={text('location', 'Lviv')}
        description={text(
          'description',
          'Scented candles from natural soy wax. ' +
            'Perfumed with the best essential oils. ' +
            'Fill your home with a cozy aroma from Armonie.'
        )}
        goodsCount={number('goodsCount', 435)}
        coverImageUrl={text(
          'coverImageUrl',
          'http://www.trendycovers.com/covers/abstract_3d_facebook_cover_1370594397.jpg'
        )}
        avatarUrl={text(
          'avatarUrl',
          'http://flowersandmorebyerin.com/wp-content/uploads/2015/02/pFlower3.png'
        )}
        rating={number('rating', 4.8)}
      />
    </div>
    <div style={{ width: '1300px' }}>
      <StoreCard
        isSmall={false}
        storeName={text('storeName', 'Armonie')}
        location={text('location', 'Lviv')}
        description={text(
          'description',
          'Scented candles from natural soy wax. ' +
            'Perfumed with the best essential oils. ' +
            'Fill your home with a cozy aroma from Armonie.'
        )}
        goodsCount={number('goodsCount', 435)}
        coverImageUrl={text(
          'coverImageUrl',
          'http://www.trendycovers.com/covers/abstract_3d_facebook_cover_1370594397.jpg'
        )}
        avatarUrl={text(
          'avatarUrl',
          'http://flowersandmorebyerin.com/wp-content/uploads/2015/02/pFlower3.png'
        )}
        rating={number('rating', 4.8)}
      />
    </div>
  </div>
));
