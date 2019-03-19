// @flow
import { omit } from 'lodash';

import type { State } from 'store/createReducer';
import { getStoreById } from 'containers/Entities/Stores/selectors';
import { getCategoriesByIds } from 'containers/Entities/Categories/selectors';
import { getLanguage } from 'containers/Language/selectors';
import { getTranslatedObject } from 'helpers/misc';
import type { State as GoodsState } from './reducer';
import type { Good, GoodWithInfo } from './types';

export const getGoodsMap = (state: State): GoodsState => state.entities.goods;

const getGoodWithInfo = (state: State, good: Good): GoodWithInfo => ({
  ...omit(good, ['seller', 'categories']),
  seller: getStoreById(state, good.seller),
  categories: getCategoriesByIds(state, good.categories),
});

const getTranslatedGood = (state: State, good: GoodWithInfo): GoodWithInfo => {
  const lang = getLanguage(state);
  const transGood = getTranslatedObject(good, lang, ['name', 'description']);
  transGood.specifications = getTranslatedObject(
    transGood.specifications,
    lang,
    ['color', 'size']
  );
  return transGood;
};

const getTransformedGood = (state: State, good: Good): GoodWithInfo =>
  getTranslatedGood(state, getGoodWithInfo(state, good));

export const getGoodById = (
  state: State,
  goodId: number
): GoodWithInfo | void => {
  const good = getGoodsMap(state)[goodId];
  if (!good) return undefined;

  return getTransformedGood(state, good);
};

export const getGoodsByIds = (
  state: State,
  goodsIds: number[]
): GoodWithInfo[] => {
  const goodsMap = getGoodsMap(state);
  return goodsIds
    .map(id => goodsMap[id])
    .filter(item => item !== undefined)
    .map(good => getTransformedGood(state, good));
};
