// @flow
import type { Action as StoreAction } from 'store/actions';
import type { AddGoodAction, UpdateGoodsMapAction } from './actions';
import { ADD_GOOD, UPDATE_GOODS_MAP } from './constants';
import type { GoodsMap } from './types';

export type State = GoodsMap;

export const initialState = {};

type Action = StoreAction<AddGoodAction | UpdateGoodsMapAction>;

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ADD_GOOD:
      return {
        ...state,
        [action.good.id]: action.good,
      };
    case UPDATE_GOODS_MAP:
      return {
        ...state,
        ...action.goodsMap,
      };
    default:
      return state;
  }
};
