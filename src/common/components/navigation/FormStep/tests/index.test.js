import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import FormStep from '../index';

describe('FormStep', function() {
  it('should render normally', function() {
    const wrapper = mount(
      <FormStep
        isCurrent={true}
        isDisabled={false}
        header="Header"
        helpText="Help text"
        onClick={jest.fn()}
      />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should match snapshot', function() {
    const tree = renderer
      .create(
        <FormStep
          isCurrent={true}
          isDisabled={false}
          header="Header"
          helpText="Help text"
          onClick={jest.fn()}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
