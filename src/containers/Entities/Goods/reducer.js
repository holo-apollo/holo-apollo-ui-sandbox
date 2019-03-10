// @flow
import type { Action as StoreAction } from 'store/actions';
import type { AddGoodAction } from './actions';
import { ADD_GOOD } from './constants';
import type { Good, GoodsMap } from './types';

export type State = GoodsMap;

export const initialState = {};

type Action = StoreAction<AddGoodAction>;

const addGood = (state: State, good: Good) => {
  const newState = { ...state };
  newState[good.id] = good;
  return newState;
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ADD_GOOD:
      return addGood(state, action.good);
    default:
      return state;
  }
};
