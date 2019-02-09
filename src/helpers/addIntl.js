import React from 'react';
import { IntlProvider, addLocaleData, injectIntl } from 'react-intl';

import localeData from '../../i18n/locale/data.json';

const addIntl = (Component, language) => {
  const messages = localeData[language] || localeData.en;

  const data = require(`react-intl/locale-data/${language}`);
  addLocaleData(data);

  const ComponentWithIntl = injectIntl(Component);

  return (
    <IntlProvider locale={language} messages={messages}>
      <ComponentWithIntl />
    </IntlProvider>
  );
};

export default addIntl;
