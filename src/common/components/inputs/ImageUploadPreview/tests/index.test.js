import React from 'react';
import { mount } from 'enzyme';
import renderer from 'react-test-renderer';

import ImageUploadPreview from '../index';

describe('ImageUploadPreview', function() {
  it('should render normally', function() {
    const wrapper = mount(
      <ImageUploadPreview
        name="name"
        label="Label"
        buttonText="Button text"
        helperText="Helper text"
      />
    );
    expect(wrapper.exists()).toBe(true);
  });

  it('should match snapshot', function() {
    const tree = renderer
      .create(
        <ImageUploadPreview
          name="name"
          label="Label"
          buttonText="Button text"
          helperText="Helper text"
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
