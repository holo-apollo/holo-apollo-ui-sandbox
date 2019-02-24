const express = require('express');
const next = require('next');
const glob = require('glob');
const { readFileSync } = require('fs');
const { basename, resolve } = require('path');

const port = parseInt(process.env.PORT, 10) || 3000;
const host = process.env.HOST || 'http://localhost';
const dev = process.env.NODE_ENV !== 'production';
const app = next({ dev });
const handle = app.getRequestHandler();

// Get the supported languages by looking for translations in the `i18n/locale` dir.
const supportedLanguages = glob
  .sync('../i18n/locale/*.json')
  .map(f => basename(f, '.json'));

const areIntlLocalesSupported = require('intl-locales-supported');

if (global.Intl) {
  // Determine if the built-in `Intl` has the locale data we need.
  if (!areIntlLocalesSupported(supportedLanguages)) {
    // `Intl` exists, but it doesn't have the data we need, so load the
    // polyfill and replace the constructors with need with the polyfill's.
    const IntlPolyfill = require('intl');
    Intl.NumberFormat = IntlPolyfill.NumberFormat;
    Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;
  }
} else {
  // No `Intl`, so use and load the polyfill.
  global.Intl = require('intl');
}

// We need to expose React Intl's locale data on the request for the user's
// locale. This function will also cache the scripts by lang in memory.
const localeDataCache = new Map();
const getLocaleDataScript = lang => {
  if (!localeDataCache.has(lang)) {
    let localeDataFile;
    try {
      localeDataFile = require.resolve(`react-intl/locale-data/${lang}`);
    } catch (e) {
      localeDataFile = require.resolve('react-intl/locale-data/en');
    }
    const localeDataScript = readFileSync(localeDataFile, 'utf8');
    localeDataCache.set(lang, localeDataScript);
  }
  return localeDataCache.get(lang);
};

// We need to load and expose the translations on the request for the user's locale.
const getMessages = lang => {
  try {
    return require(`../i18n/locale/${lang}.json`);
  } catch (e) {
    return require('../i18n/locale/en.json');
  }
};

const prepareRequest = req => {
  const locales = req.acceptsLanguages(supportedLanguages);
  const locale = locales ? locales[0] : 'en';
  const lang = locale.split('-')[0];
  req.locale = locale;
  req.localeDataScript = getLocaleDataScript(lang);
  req.messages = getMessages(lang);
};

const sentryConfigured = !!process.env.SENTRY_DSN;

const Sentry = require('@sentry/node');
if (sentryConfigured) {
  Sentry.init({ dsn: process.env.SENTRY_DSN });
}

const env = {
  API_ROOT: process.env.API_ROOT,
  STATIC_ROOT: process.env.STATIC_ROOT,
  SENTRY_DSN: process.env.SENTRY_DSN,
};

app
  .prepare()
  .then(() => {
    const server = express();

    // The request handler must be the first middleware on the app
    sentryConfigured && server.use(Sentry.Handlers.requestHandler());

    if (process.env.SERVE_STATIC) {
      const staticDir = resolve(__dirname, `../static`);
      server.use(express.static(staticDir));
    }

    server.get('/env.js', function(req, res) {
      res.set('Content-Type', 'application/javascript');
      res.send('var env = ' + JSON.stringify(env));
    });

    server.get('*', (req, res) => {
      prepareRequest(req);
      return handle(req, res);
    });

    if (sentryConfigured) {
      server.use(Sentry.Handlers.errorHandler());

      // Optional fallthrough error handler
      server.use(function onError(err, req, res) {
        // The error id is attached to `res.sentry` to be returned
        // and optionally displayed to the user for support.
        res.statusCode = 500;
        res.end(res.sentry + '\n');
      });
    }

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on ${host}:${port}`); // eslint-disable-line no-console
    });
  })
  .catch(ex => {
    console.error(ex.stack); // eslint-disable-line no-console
    process.exit(1);
  });
