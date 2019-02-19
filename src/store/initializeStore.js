// @flow
import { createStore, compose } from 'redux';

import createReducer, { type State } from './createReducer';

// A nice helper to tell us if we're on the server
export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

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
