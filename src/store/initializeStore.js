// @flow
import { createStore, compose } from 'redux';

import { isServer } from 'helpers/misc';
import createReducer, { type State } from './createReducer';

export default (initialState: State = {}) => {
  const enhancers = [];
  // Dev tools are helpful
  if (process.env.NODE_ENV === 'development' && !isServer) {
    const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;
    if (typeof devToolsExtension === 'function') {
      enhancers.push(devToolsExtension());
    }
  }
  const composedEnhancers = compose(...enhancers);

  return createStore(createReducer(), initialState, composedEnhancers);
};
