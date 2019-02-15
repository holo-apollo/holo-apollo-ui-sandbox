// @flow
import { ADD_APPLICATION_DATA } from './constants';
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
