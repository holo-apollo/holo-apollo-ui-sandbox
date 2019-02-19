// @flow

export const INIT: '@@INIT' = '@@INIT';

type InitAction = {|
  type: typeof INIT,
|};

export type Action<T> = InitAction | T;

export const init = (): InitAction => ({
  type: INIT,
});
