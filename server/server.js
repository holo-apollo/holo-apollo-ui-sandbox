// Polyfill Node with `Intl` that has data for all locales.
// See: https://formatjs.io/guides/runtime-environments/#server
const IntlPolyfill = require('intl');
Intl.NumberFormat = IntlPolyfill.NumberFormat;
Intl.DateTimeFormat = IntlPolyfill.DateTimeFormat;

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

// We need to expose React Intl's locale data on the request for the user's
// locale. This function will also cache the scripts by lang in memory.
const localeDataCache = new Map();
const getLocaleDataScript = lang => {
  if (!localeDataCache.has(lang)) {
    const localeDataFile = require.resolve(`react-intl/locale-data/${lang}`);
    const localeDataScript = readFileSync(localeDataFile, 'utf8');
    localeDataCache.set(lang, localeDataScript);
  }
  return localeDataCache.get(lang);
};

// We need to load and expose the translations on the request for the user's locale.
const getMessages = lang => {
  return require(`../i18n/locale/${lang}.json`);
};

const prepareRequest = req => {
  const locales = req.acceptsLanguages(supportedLanguages);
  const locale = locales ? locales[0] : 'en';
  const lang = locale.split('-')[0];
  req.locale = locale;
  req.localeDataScript = getLocaleDataScript(lang);
  req.messages = getMessages(lang);
};

app
  .prepare()
  .then(() => {
    const server = express();
    if (process.env.SERVE_STATIC) {
      const staticDir = resolve(__dirname, `../static`);
      server.use(express.static(staticDir));
    }

    server.get('*', (req, res) => {
      prepareRequest(req);
      return handle(req, res);
    });

    server.listen(port, err => {
      if (err) throw err;
      console.log(`> Ready on ${host}:${port}`); // eslint-disable-line no-console
    });
  })
  .catch(ex => {
    console.error(ex.stack); // eslint-disable-line no-console
    process.exit(1);
  });
