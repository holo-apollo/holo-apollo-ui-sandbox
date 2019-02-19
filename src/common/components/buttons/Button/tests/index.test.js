import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import Button from '../index';

describe('Button', function() {
  it('should render normally', function() {
    const wrapper = mount(<Button>Button text</Button>);
    expect(wrapper.contains('Button text')).toBe(true);
  });

  it('should match snapshot', function() {
    const tree = renderer.create(<Button>Button text</Button>).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
