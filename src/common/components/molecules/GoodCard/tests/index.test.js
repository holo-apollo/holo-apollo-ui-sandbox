import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import GoodCard from '../index';

describe('GoodCard', function() {
  it('should render normally', function() {
    const wrapper = mount(
      <GoodCard
        name="Flower in a bowl"
        mainImageUrl="http://flowersandmorebyerin.com/wp-content/uploads/2015/02/pFlower3.png"
        price={95}
        priceCurrency="UAH"
        sellerInfo={{ storeName: 'Gold stuff shopping' }}
        onPurchase={jest.fn()}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should match snapshot', function() {
    const tree = renderer
      .create(
        <GoodCard
          name="Flower in a bowl"
          mainImageUrl="http://flowersandmorebyerin.com/wp-content/uploads/2015/02/pFlower3.png"
          price={95}
          priceCurrency="UAH"
          sellerInfo={{ storeName: 'Gold stuff shopping' }}
          onPurchase={jest.fn()}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
