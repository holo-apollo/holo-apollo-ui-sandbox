import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import TextFieldWithCounter from '../index';

describe('TextFieldWithCounter', function() {
  it('should render normally', function() {
    const wrapper = mount(
      <TextFieldWithCounter name="name" label="Label" maxLength={100} />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should match snapshot', function() {
    const tree = renderer
      .create(
        <TextFieldWithCounter name="name" label="Label" maxLength={100} />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
