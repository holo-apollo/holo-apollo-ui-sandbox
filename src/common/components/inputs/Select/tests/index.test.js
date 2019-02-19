import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Select from '../index';

const options = [
  { value: 1, label: 'One' },
  { value: 2, label: 'Two' },
  { value: 3, label: 'Three' },
];

describe('Select', function() {
  it('should render normally', function() {
    const wrapper = mount(<Select options={options} label="Label" />);
    expect(wrapper.exists()).toBe(true);
  });

  it('should match snapshot', function() {
    const tree = renderer
      .create(<Select options={options} label="Label" />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
