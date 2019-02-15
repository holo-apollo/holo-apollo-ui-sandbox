// @flow
import type {
  AddApplicationDataAction,
  AddCategoryOptionsAction,
} from './actions';
import { ADD_APPLICATION_DATA, ADD_CATEGORY_OPTIONS } from './constants';

const initialState = {
  applicationData: undefined,
  categoryOptions: [],
};

type Action = AddApplicationDataAction | AddCategoryOptionsAction;

// $FlowFixMe
export default (state = initialState, action: Action) => {
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
