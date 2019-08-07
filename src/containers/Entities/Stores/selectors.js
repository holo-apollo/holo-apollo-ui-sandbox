// @flow
import type { State } from 'store/createReducer';
import type { State as StoresState } from './reducer';
import type { Store } from './types';

export const getStoresMap = (state: State): StoresState =>
  state.entities.stores;

export const getStoreById = (state: State, goodId: number): Store | void =>
  getStoresMap(state)[goodId];
