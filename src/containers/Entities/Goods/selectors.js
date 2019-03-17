// @flow
import { omit } from 'lodash';

import type { State } from 'store/createReducer';
import { getStoreById } from 'containers/Entities/Stores/selectors';
import { getCategoriesByIds } from 'containers/Entities/Categories/selectors';
import type { State as GoodsState } from './reducer';
import type { Good, GoodWithInfo } from './types';

export const getGoodsMap = (state: State): GoodsState => state.entities.goods;

export const addGoodInfo = (state: State, good: Good): GoodWithInfo => ({
  ...omit(good, ['seller', 'categories']),
  seller: getStoreById(state, good.seller),
  categories: getCategoriesByIds(state, good.categories),
});

export const getGoodById = (
  state: State,
  goodId: number
): GoodWithInfo | void => {
  const good = getGoodsMap(state)[goodId];
  if (!good) return undefined;

  return addGoodInfo(state, good);
};

export const getGoodsByIds = (
  state: State,
  goodsIds: number[]
): GoodWithInfo[] => {
  const goodsMap = getGoodsMap(state);
  return goodsIds
    .map(id => goodsMap[id])
    .filter(item => item !== undefined)
    .map(good => addGoodInfo(state, good));
};
