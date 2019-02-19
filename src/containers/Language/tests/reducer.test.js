import { init } from 'store/actions';
import reducer, { initialState } from '../reducer';

import { setLanguage } from '../actions';

describe('Language reducer', function() {
  it('should return initial state', function() {
    expect(reducer(undefined, init())).toEqual(initialState);
  });

  it('should handle setLanguage action', function() {
    expect(reducer(undefined, setLanguage('uk'))).toEqual('uk');
  });
});
