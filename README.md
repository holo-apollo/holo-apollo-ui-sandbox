# Holo Apollo UI

This is the project for UI code of https://www.holo-apollo.art.

For API project see https://github.com/holo-apollo/holo-apollo-api.

## Developers guide

- Make sure to have `node` and `yarn` installed locally with versions specified in `package.json` file

- Install frontend requirements:

  ```
  yarn
  ```

#### Internationalization (i18n)

- Mark all user-facing strings in React code using [react-intl](https://github.com/yahoo/react-intl/wiki#getting-started) means

- Build the bundle. You should see messages collected to `.json` files for each module in `i18n/messages` folder

- Collect all messages from default language:

  ```
  yarn default-lang
  ```

  They will appear in `i18n/locale/en.json`

- Copy new strings for translation from `i18n/locale/en.json` to each language file and translate them there

- Commit the result

#### TODO

- Remove enzyme, use react-testing-library
