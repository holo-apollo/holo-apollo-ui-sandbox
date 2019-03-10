// @flow
import type { Store } from 'containers/Entities/Stores/types';
import type { Category } from 'containers/Entities/Categories/types';

export type Good = {
  id: number,
  name: string,
  description: string,
  category: number,
  price: number,
  priceCurrency: string,
  discount: number,
  availabilityDisplay: string,
  images: Array<{ imageUrl: string }>,
  sellerId: number,
};

export type GoodWithInfo = {
  ...$Exact<$Diff<Good, { sellerId: any }>>,
  sellerInfo: Store,
  category: Category,
};

export type GoodsMap = { [number]: Good };
