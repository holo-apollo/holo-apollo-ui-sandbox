import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import IncrementField from '../index';

describe('IncrementField', function() {
  it('should render normally', function() {
    const wrapper = mount(<IncrementField />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should match snapshot', function() {
    const tree = renderer.create(<IncrementField />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
