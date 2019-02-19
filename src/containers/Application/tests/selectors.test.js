import {
  getApplication,
  getCategoryOptions,
  getApplicationData,
  getApplicationId,
  getApplicationPubDate,
} from '../selectors';

const applicationData = {
  id: 1,
  pub_date: '2019-02-02',
};

const categoryOptions = [
  { value: 'val1', label: 'Value 1' },
  { value: 'val2', label: 'Value 2' },
  { value: 'val3', label: 'Value 3' },
];

const application = {
  applicationData,
  categoryOptions,
};

const state = {
  application,
};

describe('getApplication', function() {
  it('should select application state', function() {
    expect(getApplication(state)).toEqual(application);
  });
});

describe('getCategoryOptions', function() {
  it('should select category options', function() {
    expect(getCategoryOptions(state)).toEqual(categoryOptions);
  });
});

describe('getApplicationData', function() {
  it('should select application data', function() {
    expect(getApplicationData(state)).toEqual(applicationData);
  });
});

describe('getApplicationId', function() {
  it('should select application id', function() {
    expect(getApplicationId(state)).toEqual(1);
  });
});

describe('getApplicationPubDate', function() {
  it('should select application pub date', function() {
    expect(getApplicationPubDate(state)).toEqual('2019-02-02');
  });
});
