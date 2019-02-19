// @flow
import type { SelectOption } from 'common/types';
import type { Action as StoreAction } from 'store/actions';
import type {
  AddApplicationDataAction,
  AddCategoryOptionsAction,
} from './actions';
import { ADD_APPLICATION_DATA, ADD_CATEGORY_OPTIONS } from './constants';
import type { ApplicationData } from './types';

export type State = {
  applicationData?: ApplicationData,
  categoryOptions: SelectOption<any>[],
};

export const initialState = {
  applicationData: undefined,
  categoryOptions: [],
};

type Action = StoreAction<AddApplicationDataAction | AddCategoryOptionsAction>;

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case ADD_APPLICATION_DATA:
      return {
        ...state,
        applicationData: action.applicationData,
      };
    case ADD_CATEGORY_OPTIONS:
      return {
        ...state,
        categoryOptions: action.options,
      };
    default:
      return state;
  }
};
