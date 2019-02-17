import { combineReducers } from 'redux';
import { connectRouter } from 'connected-react-router';

import applicationReducer from 'containers/Application/reducer';
import languageReducer from 'containers/Language/reducer';

export default history =>
  combineReducers({
    router: connectRouter(history),
    application: applicationReducer,
    language: languageReducer,
  });
