// @flow
import type { Action as StoreAction } from 'store/actions';
import type { AddStoreAction, UpdateStoresMapAction } from './actions';
import { ADD_STORE, UPDATE_STORES_MAP } from './constants';
import type { StoresMap } from './types';

export type State = StoresMap;

export const initialState = {};

type Action = StoreAction<AddStoreAction | UpdateStoresMapAction>;

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ADD_STORE:
      return {
        ...state,
        [action.store.id]: action.store,
      };
    case UPDATE_STORES_MAP:
      return {
        ...state,
        ...action.storesMap,
      };
    default:
      return state;
  }
};
