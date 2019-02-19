import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import TextField from '../index';

describe('TextField', function() {
  it('should render normally', function() {
    const wrapper = mount(<TextField name="name" label="Label" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should match snapshot', function() {
    const tree = renderer
      .create(<TextField name="name" label="Label" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
