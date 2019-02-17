import { createSelector } from 'reselect';

export const getApplication = state => state.application;

export const getApplicationData = createSelector(
  getApplication,
  application => application && application.applicationData
);

export const getApplicationId = createSelector(
  getApplicationData,
  data => data && data.id
);

export const getApplicationPubDate = createSelector(
  getApplicationData,
  data => data && data.pub_date
);

export const getCategoryOptions = createSelector(
  getApplication,
  application => application && application.categoryOptions
);
