import { init } from 'store/actions';
import reducer, { initialState } from '../reducer';

import { addApplicationData, addCategoryOptions } from '../actions';

describe('Application reducer', function() {
  it('should return initial state', function() {
    expect(reducer(undefined, init())).toEqual(initialState);
  });

  it('should handle addApplicationData action', function() {
    const applicationData = {
      id: 1,
      pubDate: '2019-02-02',
    };
    expect(
      reducer(undefined, addApplicationData(applicationData)).applicationData
    ).toEqual(applicationData);
  });

  it('should handle addCategoryOptions action', function() {
    const categoryOptions = [
      { value: 'val1', label: 'Value 1' },
      { value: 'val2', label: 'Value 2' },
      { value: 'val3', label: 'Value 3' },
    ];
    expect(
      reducer(undefined, addCategoryOptions(categoryOptions)).categoryOptions
    ).toEqual(categoryOptions);
  });
});
