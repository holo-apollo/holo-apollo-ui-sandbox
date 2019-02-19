import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Checkbox from '../index';

describe('Checkbox', function() {
  it('should render normally', function() {
    const wrapper = mount(<Checkbox name="name" label="Label" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should match snapshot', function() {
    const tree = renderer
      .create(<Checkbox name="name" label="Label" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
