import React from 'react';
import { configure, addDecorator } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
import { IntlProvider } from 'react-intl';

import GlobalStyle from 'common/GlobalStyle';
import theme from 'common/theme';

// automatically import all components stories
const componentsReq = require.context(
  '../../src/',
  true,
  /stories\/.*\.stories\.js$/
);

function loadStories() {
  componentsReq.keys().forEach(filename => componentsReq(filename));
}

const intlDecorator = story => (
  <IntlProvider locale="en">{story()}</IntlProvider>
);

const themeDecorator = story => (
  <div style={{ padding: '20px', minHeight: '100vh' }}>
    <GlobalStyle />
    <MuiThemeProvider theme={theme}>{story()}</MuiThemeProvider>
  </div>
);

addDecorator(intlDecorator);
addDecorator(themeDecorator);
addDecorator(withKnobs);

configure(loadStories, module);
