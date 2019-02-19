// @flow
import type { State } from 'store/createReducer';

import type { State as LanguageState } from './reducer';

export const getLanguage = (state: State): LanguageState => state.language;
