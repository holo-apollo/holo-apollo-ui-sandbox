import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import DoubleBounceSpinner from '../index';

describe('DoubleBounceSpinner', function() {
  it('should render normally', function() {
    const wrapper = mount(<DoubleBounceSpinner />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should match snapshot', function() {
    const tree = renderer.create(<DoubleBounceSpinner />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
