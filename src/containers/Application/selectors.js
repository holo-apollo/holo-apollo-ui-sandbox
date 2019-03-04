// @flow
import { createSelector } from 'reselect';

import type { State } from 'store/createReducer';
import type { SelectOption } from 'common/types';
import type { State as ApplicationState } from './reducer';
import type { ApplicationData } from './types';

export const getApplication = (state: State): ApplicationState =>
  state.application;

export const getApplicationData = createSelector(
  getApplication,
  (application: ApplicationState): ApplicationData | void =>
    application && application.applicationData
);

export const getApplicationId = createSelector(
  getApplicationData,
  (data?: ApplicationData): number | void => data && data.id
);

export const getApplicationPubDate = createSelector(
  getApplicationData,
  (data?: ApplicationData): string | void => data && data.pubDate
);

export const getCategoryOptions = createSelector(
  getApplication,
  (application: ApplicationState): SelectOption<string>[] | void =>
    application && application.categoryOptions
);
