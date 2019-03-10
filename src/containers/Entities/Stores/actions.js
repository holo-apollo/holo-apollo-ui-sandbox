// @flow
import { ADD_STORE } from './constants';
import type { Store } from './types';

export type AddStoreAction = {
  type: typeof ADD_STORE,
  store: Store,
};

export const addStore = (store: Store): AddStoreAction => ({
  type: ADD_STORE,
  store,
});
