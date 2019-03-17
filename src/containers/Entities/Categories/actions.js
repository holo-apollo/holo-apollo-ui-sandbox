// @flow
import { ADD_CATEGORIES, UPDATE_CATEGORIES_MAP } from './constants';
import type { Category, CategoriesMap } from './types';

export type AddCategoriesAction = {
  type: typeof ADD_CATEGORIES,
  categories: Category[],
};

export const addCategories = (categories: Category[]): AddCategoriesAction => ({
  type: ADD_CATEGORIES,
  categories,
});

export type UpdateCategoriesMapAction = {
  type: typeof UPDATE_CATEGORIES_MAP,
  categoriesMap: CategoriesMap,
};

export const updateCategoriesMap = (
  categoriesMap: CategoriesMap
): UpdateCategoriesMapAction => ({
  type: UPDATE_CATEGORIES_MAP,
  categoriesMap,
});
