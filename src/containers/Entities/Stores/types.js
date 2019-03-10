// @flow
export type Store = {
  id: number,
  storeName: string,
  description: string,
  location: string,
  goodsCount: number,
  rating: number | null,
};

export type StoresMap = { [number]: Store };
