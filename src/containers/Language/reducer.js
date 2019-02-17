// @flow
import { SET_LANGUAGE } from './constants';
import type { SetLanguageAction } from './actions';

// $FlowFixMe
export default (state = 'en', action: SetLanguageAction) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.language;
    default:
      return state;
  }
};
