// @flow
import type { Action as StoreAction } from 'store/actions';
import type { AddCategoriesAction, UpdateCategoriesMapAction } from './actions';
import { ADD_CATEGORIES, UPDATE_CATEGORIES_MAP } from './constants';
import type { Category, CategoriesMap } from './types';

export type State = CategoriesMap;

export const initialState = {};

type Action = StoreAction<AddCategoriesAction | UpdateCategoriesMapAction>;

const addCategories = (state: State, categories: Category[]) => {
  return categories.reduce((acc: CategoriesMap, curr: Category) => {
    return { ...acc, [curr.id]: curr };
  }, state);
};

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ADD_CATEGORIES:
      return addCategories(state, action.categories);
    case UPDATE_CATEGORIES_MAP:
      return {
        ...state,
        ...action.categoriesMap,
      };
    default:
      return state;
  }
};
