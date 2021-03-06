// @flow
import type { Store } from 'containers/Entities/Stores/types';
import type { Category } from 'containers/Entities/Categories/types';

export type GoodImage = {
  imageUrl: string,
};

export type Good = {
  id: number,
  name: string,
  description: string,
  categories: number[],
  seller: number,
  price: number,
  priceCurrency: string,
  discount: number,
  availability: 'available' | 'not_available' | 'on_request',
  images: GoodImage[],
  mainImageUrl: string,
  specifications: {
    color?: string,
    size?: string,
  },
};

export type GoodWithInfo = {
  ...$Exact<$Diff<Good, { seller: any, categories: any }>>,
  seller: Store,
  categories: Category[],
};

export type GoodsMap = { [number]: Good };
