// @flow
import { ADD_CATEGORIES } from './constants';
import type { Category } from './types';

export type AddCategoriesAction = {
  type: typeof ADD_CATEGORIES,
  categories: Category[],
};

export const addCategories = (categories: Category[]): AddCategoriesAction => ({
  type: ADD_CATEGORIES,
  categories,
});
