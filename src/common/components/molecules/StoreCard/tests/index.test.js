import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import StoreCard from '../index';

describe('StoreCard', function() {
  it('should render normally', function() {
    const wrapper = mount(
      <StoreCard
        isSmall={false}
        storeName="Armonie"
        location="Lviv"
        description={
          'Scented candles from natural soy wax. ' +
          'Perfumed with the best essential oils. ' +
          'Fill your home with a cozy aroma from Armonie.'
        }
        goodsCount={435}
        coverImageUrl="http://www.trendycovers.com/covers/abstract_3d_facebook_cover_1370594397.jpg"
        avatarUrl="http://flowersandmorebyerin.com/wp-content/uploads/2015/02/pFlower3.png"
        rating={4.8}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should match snapshot if small', function() {
    const tree = renderer
      .create(
        <StoreCard
          isSmall={true}
          storeName="Armonie"
          location="Lviv"
          description={
            'Scented candles from natural soy wax. ' +
            'Perfumed with the best essential oils. ' +
            'Fill your home with a cozy aroma from Armonie.'
          }
          goodsCount={435}
          coverImageUrl="http://www.trendycovers.com/covers/abstract_3d_facebook_cover_1370594397.jpg"
          avatarUrl="http://flowersandmorebyerin.com/wp-content/uploads/2015/02/pFlower3.png"
          rating={4.8}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should match snapshot if big', function() {
    const tree = renderer
      .create(
        <StoreCard
          isSmall={false}
          storeName="Armonie"
          location="Lviv"
          description={
            'Scented candles from natural soy wax. ' +
            'Perfumed with the best essential oils. ' +
            'Fill your home with a cozy aroma from Armonie.'
          }
          goodsCount={435}
          coverImageUrl="http://www.trendycovers.com/covers/abstract_3d_facebook_cover_1370594397.jpg"
          avatarUrl="http://flowersandmorebyerin.com/wp-content/uploads/2015/02/pFlower3.png"
          rating={4.8}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
