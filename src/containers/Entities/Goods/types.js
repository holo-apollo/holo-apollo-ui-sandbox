// @flow
import type { Store } from 'containers/Entities/Stores/types';
import type { Category } from 'containers/Entities/Categories/types';

export type Good = {
  id: number,
  name: string,
  description: string,
  categoryId: number,
  seller: number,
  price: number,
  priceCurrency: string,
  discount: number,
  availability: 'available' | 'not_available' | 'on_request',
  images: Array<{ imageUrl: string }>,
};

export type GoodWithInfo = {
  ...$Exact<$Diff<Good, { seller: any, categoryId: any }>>,
  seller: Store,
  category: Category,
};

export type GoodsMap = { [number]: Good };
