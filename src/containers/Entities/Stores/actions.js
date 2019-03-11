// @flow
import { ADD_STORE, UPDATE_STORES_MAP } from './constants';
import type { Store, StoresMap } from './types';

export type AddStoreAction = {
  type: typeof ADD_STORE,
  store: Store,
};

export const addStore = (store: Store): AddStoreAction => ({
  type: ADD_STORE,
  store,
});

export type UpdateStoresMapAction = {
  type: typeof UPDATE_STORES_MAP,
  storesMap: StoresMap,
};

export const updateStoresMap = (
  storesMap: StoresMap
): UpdateStoresMapAction => ({
  type: UPDATE_STORES_MAP,
  storesMap,
});
