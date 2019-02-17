// @flow
import { SET_LANGUAGE } from './constants';

export type SetLanguageAction = {
  type: typeof SET_LANGUAGE,
  language: string,
};

export const setLanguage = (language: string): SetLanguageAction => ({
  type: SET_LANGUAGE,
  language,
});
