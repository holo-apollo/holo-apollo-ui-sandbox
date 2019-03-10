// @flow
export type Good = {
  id: number,
  name: string,
  description: string,
  category: number,
  price: number,
  priceCurrency: string,
  discount: number,
  isInStock: boolean,
};

export type GoodsMap = { [number]: Good };
