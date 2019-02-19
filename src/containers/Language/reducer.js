// @flow
import type { Action as StoreAction } from 'store/actions';
import { SET_LANGUAGE } from './constants';
import type { SetLanguageAction } from './actions';

export type State = string;

type Action = StoreAction<SetLanguageAction>;

export const initialState = 'en';

export default (state: State = initialState, action: Action) => {
  switch (action.type) {
    case SET_LANGUAGE:
      return action.language;
    default:
      return state;
  }
};
