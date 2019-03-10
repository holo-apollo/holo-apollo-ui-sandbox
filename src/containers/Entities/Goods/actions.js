// @flow
import { ADD_GOOD } from './constants';
import type { Good } from './types';

export type AddGoodAction = {
  type: typeof ADD_GOOD,
  good: Good,
};

export const addGood = (good: Good): AddGoodAction => ({
  type: ADD_GOOD,
  good,
});
