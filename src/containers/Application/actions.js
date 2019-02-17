// @flow
import type { SelectOption } from 'common/types';
import { ADD_APPLICATION_DATA, ADD_CATEGORY_OPTIONS } from './constants';
import { type ApplicationData } from './types';

export type AddApplicationDataAction = {
  type: typeof ADD_APPLICATION_DATA,
  applicationData: ApplicationData,
};

export const addApplicationData = (
  applicationData: ApplicationData
): AddApplicationDataAction => ({
  type: ADD_APPLICATION_DATA,
  applicationData,
});

export type AddCategoryOptionsAction = {
  type: typeof ADD_CATEGORY_OPTIONS,
  options: SelectOption<string>[],
};

export const addCategoryOptions = (
  options: SelectOption<string>[]
): AddCategoryOptionsAction => ({
  type: ADD_CATEGORY_OPTIONS,
  options,
});
