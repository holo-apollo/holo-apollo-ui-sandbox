// @flow
import { combineReducers } from 'redux';

import applicationReducer, {
  type State as ApplicationState,
} from 'containers/Application/reducer';
import languageReducer, {
  type State as LanguageState,
} from 'containers/Language/reducer';
import categoriesReducer, {
  type State as CategoriesState,
} from 'containers/Entities/Categories/reducer';
import goodsReducer, {
  type State as GoodsState,
} from 'containers/Entities/Goods/reducer';
import storesReducer, {
  type State as StoresState,
} from 'containers/Entities/Stores/reducer';

export type State = {
  application: ApplicationState,
  language: LanguageState,
  entities: {
    categories: CategoriesState,
    goods: GoodsState,
    stores: StoresState,
  },
};

export default () =>
  combineReducers({
    application: applicationReducer,
    language: languageReducer,
    entities: combineReducers({
      categories: categoriesReducer,
      goods: goodsReducer,
      stores: storesReducer,
    }),
  });
