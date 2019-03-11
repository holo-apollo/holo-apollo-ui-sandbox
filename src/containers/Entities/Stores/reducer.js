// @flow
import type { Action as StoreAction } from 'store/actions';
import type { AddStoreAction, UpdateStoresMapAction } from './actions';
import { ADD_STORE, UPDATE_STORES_MAP } from './constants';
import type { Store, StoresMap } from './types';

export type State = StoresMap;

export const initialState = {};

type Action = StoreAction<AddStoreAction | UpdateStoresMapAction>;

const addStore = (state: State, store: Store) => {
  const newState = { ...state };
  newState[store.id] = store;
  return newState;
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ADD_STORE:
      return addStore(state, action.store);
    case UPDATE_STORES_MAP:
      return {
        ...state,
        ...action.storesMap,
      };
    default:
      return state;
  }
};
