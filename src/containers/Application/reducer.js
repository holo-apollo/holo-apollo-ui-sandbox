// @flow
import { type AddApplicationDataAction } from './actions';
import { ADD_APPLICATION_DATA } from './constants';

const initialState = {
  applicationData: undefined,
  categoryOptions: [],
};

// $FlowFixMe
export default (state = initialState, action: AddApplicationDataAction) => {
  switch (action.type) {
    case ADD_APPLICATION_DATA:
      return {
        ...state,
        applicationData: action.applicationData,
      };
    default:
      return state;
  }
};
