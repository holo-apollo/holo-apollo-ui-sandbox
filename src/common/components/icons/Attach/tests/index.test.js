import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Attach from '../index';

describe('Attach', function() {
  it('should render normally', function() {
    const wrapper = mount(<Attach />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should match snapshot', function() {
    const tree = renderer.create(<Attach />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
