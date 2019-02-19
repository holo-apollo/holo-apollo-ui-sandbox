import { combineReducers } from 'redux';

import applicationReducer from 'containers/Application/reducer';
import languageReducer from 'containers/Language/reducer';

export default () =>
  combineReducers({
    application: applicationReducer,
    language: languageReducer,
  });
