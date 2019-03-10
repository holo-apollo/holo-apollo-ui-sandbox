// @flow
import type { Action as StoreAction } from 'store/actions';
import type { AddCategoriesAction } from './actions';
import { ADD_CATEGORIES } from './constants';
import type { Category, CategoriesMap } from './types';

export type State = CategoriesMap;

export const initialState = {};

type Action = StoreAction<AddCategoriesAction>;

const addCategories = (state: State, categories: Category[]) => {
  return categories.reduce((acc: CategoriesMap, curr: Category) => {
    const newAcc = { ...acc };
    newAcc[curr.id] = curr;
    return newAcc;
  }, state);
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ADD_CATEGORIES:
      return addCategories(state, action.categories);
    default:
      return state;
  }
};
