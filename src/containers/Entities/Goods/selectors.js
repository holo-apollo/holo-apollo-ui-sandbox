// @flow
import type { State } from 'store/createReducer';
import type { State as GoodsState } from './reducer';
import type { Good } from './types';

export const getGoodsMap = (state: State): GoodsState => state.entities.goods;

export const getGoodById = (state: State, goodId: number): Good | void =>
  getGoodsMap(state)[goodId];
