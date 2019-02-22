import App, { Container } from 'next/app';
import Head from 'next/head';
import React, { Fragment } from 'react';
import { Provider } from 'react-redux';
import { MuiThemeProvider } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import JssProvider from 'react-jss/lib/JssProvider';
import { IntlProvider, addLocaleData } from 'react-intl';
import * as Sentry from '@sentry/browser';

import withReduxStore from 'lib/withReduxStore';
import GlobalStyle from 'common/GlobalStyle';
import getPageContext from 'helpers/getPageContext';
import { isServer } from 'helpers/misc';
import { subscribeApiToStore } from 'helpers/rest';
import HelmetComponent from 'common/components/HelmetComponent';
import ErrorBoundary from 'common/components/ErrorBoundary';
import { setLanguage } from 'containers/Language/actions';

// Register React Intl's locale data for the user's locale in the browser. This
// locale data was added to the page by `pages/_document.js`. This only happens
// once, on initial page load in the browser.
if (typeof window !== 'undefined' && window.ReactIntlLocaleData) {
  Object.keys(window.ReactIntlLocaleData).forEach(lang => {
    addLocaleData(window.ReactIntlLocaleData[lang]);
  });
}

class MyApp extends App {
  constructor() {
    super();
    this.pageContext = getPageContext();
    if (!isServer && window.env.SENTRY_DSN) {
      Sentry.init({
        dsn: window.env.SENTRY_DSN,
      });
    }
  }

  static async getInitialProps({ Component, ctx }) {
    let pageProps = {};

    // Get the `locale` and `messages` from the request object on the server.
    // In the browser, use the same values that the server serialized.
    const { req, reduxStore } = ctx;
    const { locale, messages } = req || window.__NEXT_DATA__.props;
    const initialNow = Date.now();

    // Subscribe API to store changes
    subscribeApiToStore(reduxStore);

    // Set language on store
    reduxStore.dispatch(setLanguage(locale));

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx);
    }

    return { pageProps, locale, messages, initialNow };
  }

  componentDidMount() {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles && jssStyles.parentNode) {
      jssStyles.parentNode.removeChild(jssStyles);
    }
  }

  render() {
    const {
      Component,
      pageProps,
      reduxStore,
      locale,
      messages,
      initialNow,
    } = this.props;

    return (
      <Container>
        <Head>
          <title>Holo Apollo Art</title>
        </Head>
        <ErrorBoundary>
          <IntlProvider
            locale={locale}
            messages={messages}
            initialNow={initialNow}
          >
            <Provider store={reduxStore}>
              <JssProvider
                registry={this.pageContext.sheetsRegistry}
                generateClassName={this.pageContext.generateClassName}
              >
                <MuiThemeProvider
                  theme={this.pageContext.theme}
                  sheetsManager={this.pageContext.sheetsManager}
                >
                  <Fragment>
                    <CssBaseline />
                    <GlobalStyle />
                    <HelmetComponent />
                    <Component pageContext={this.pageContext} {...pageProps} />
                  </Fragment>
                </MuiThemeProvider>
              </JssProvider>
            </Provider>
          </IntlProvider>
        </ErrorBoundary>
      </Container>
    );
  }
}

export default withReduxStore(MyApp);
