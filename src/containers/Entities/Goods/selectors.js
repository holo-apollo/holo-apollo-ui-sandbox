// @flow
import { omit } from 'lodash';

import type { State } from 'store/createReducer';
import { getStoreById } from 'containers/Entities/Stores/selectors';
import { getCategoryById } from 'containers/Entities/Categories/selectors';
import type { State as GoodsState } from './reducer';
import type { GoodWithInfo } from './types';

export const getGoodsMap = (state: State): GoodsState => state.entities.goods;

export const getGoodById = (
  state: State,
  goodId: number
): GoodWithInfo | void => {
  const good = getGoodsMap(state)[goodId];
  if (!good) return undefined;

  return {
    ...omit(good, ['sellerId']),
    sellerInfo: getStoreById(state, good.sellerId),
    category: getCategoryById(state, good.category),
  };
};
