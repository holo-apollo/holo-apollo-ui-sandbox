// @flow
import type { Action as StoreAction } from 'store/actions';
import type { AddStoreAction } from './actions';
import { ADD_STORE } from './constants';
import type { Store, StoresMap } from './types';

export type State = StoresMap;

export const initialState = {};

type Action = StoreAction<AddStoreAction>;

const addStore = (state: State, store: Store) => {
  const newState = { ...state };
  newState[store.id] = store;
  return newState;
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ADD_STORE:
      return addStore(state, action.store);
    default:
      return state;
  }
};
