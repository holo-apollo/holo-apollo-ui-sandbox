// @flow
import { createSelector } from 'reselect';
import { sortBy } from 'lodash';

import type { State } from 'store/createReducer';
import type { State as CategoriesState } from './reducer';
import type { Category } from './types';

export const getCategoriesMap = (state: State): CategoriesState =>
  state.entities.categories;

export const getCategoryById = (
  state: State,
  categoryId: number
): Category | void => getCategoriesMap(state)[categoryId];

export const getMainCategories = createSelector(
  getCategoriesMap,
  categoriesMap =>
    sortBy(Object.keys(categoriesMap))
      .map(id => categoriesMap[id])
      .filter(category => category.isMain)
);

export const getCategoriesByIds = (state: State, ids: number[]): Category[] => {
  const categoriesMap = getCategoriesMap(state);
  return ids
    .map(id => categoriesMap[id])
    .filter(category => category !== undefined);
};
