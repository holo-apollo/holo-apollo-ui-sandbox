import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Close from '../index';

describe('Close', function() {
  it('should render normally', function() {
    const wrapper = mount(<Close />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should match snapshot', function() {
    const tree = renderer.create(<Close />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
