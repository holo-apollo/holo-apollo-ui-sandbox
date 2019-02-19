// @flow
import { combineReducers } from 'redux';

import applicationReducer, {
  type State as ApplicationState,
} from 'containers/Application/reducer';
import languageReducer, {
  type State as LanguageState,
} from 'containers/Language/reducer';

export type State = {
  application: ApplicationState,
  language: LanguageState,
};

export default () =>
  combineReducers({
    application: applicationReducer,
    language: languageReducer,
  });
