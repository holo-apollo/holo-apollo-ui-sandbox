// @flow

export const isServer = !(
  typeof window !== 'undefined' &&
  window.document &&
  window.document.createElement
);

export const getEnv = (key: string) =>
  isServer
    ? process && process.env
      ? process.env[key]
      : ''
    : window && window.env
    ? window.env[key]
    : '';
