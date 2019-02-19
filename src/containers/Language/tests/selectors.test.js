import { getLanguage } from '../selectors';

const state = {
  language: 'uk',
};

describe('getLanguage', function() {
  it('should select current language', function() {
    expect(getLanguage(state)).toEqual('uk');
  });
});
