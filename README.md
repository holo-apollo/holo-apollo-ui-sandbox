# Holo Apollo UI

This is the project for UI code of https://www.holo-apollo.art.

For API project see https://github.com/holo-apollo/holo-apollo-api.

## Developers guide

- Make sure to have `node` and `yarn` installed locally with versions specified in `package.json` file

- Install frontend requirements:

  ```
  yarn
  ```

- To not forget to build and commit bundles, set up pre-commit git hook

#### Internationalization (i18n)

- Mark all user-facing strings in React code using [react-intl](https://github.com/yahoo/react-intl/wiki#getting-started) means

- Build the bundle. You should see messages collected to `.json` files for each module in `frontend/i18n/messages` folder

- Merge messages to single file:

  ```
  yarn build-langs
  ```

- Copy new strings for translation from `frontend/i18n/locale/data.json` to each language file and translate them there

- Merge messages again to put translations to single `data.json` file

- Commit the result

This process should perhaps be partially automated.
