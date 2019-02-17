import { createSelector } from 'reselect';
import queryString from 'query-string';

export const getRouter = state => state.router;

export const getLocation = createSelector(
  getRouter,
  router => router && router.location
);

export const getQueryParams = createSelector(
  getLocation,
  location => location && queryString.parse(location.search)
);

export const getQueryParam = (state, param) => {
  const params = getQueryParams(state);
  return params && params[param];
};
