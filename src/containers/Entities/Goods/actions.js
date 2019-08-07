// @flow
import { ADD_GOOD, UPDATE_GOODS_MAP } from './constants';
import type { Good, GoodsMap } from './types';

export type AddGoodAction = {
  type: typeof ADD_GOOD,
  good: Good,
};

export const addGood = (good: Good): AddGoodAction => ({
  type: ADD_GOOD,
  good,
});

export type UpdateGoodsMapAction = {
  type: typeof UPDATE_GOODS_MAP,
  goodsMap: GoodsMap,
};

export const updateGoodsMap = (goodsMap: GoodsMap): UpdateGoodsMapAction => ({
  type: UPDATE_GOODS_MAP,
  goodsMap,
});
