import { schema } from 'normalizr';

export const storeSchema = new schema.Entity('stores');

export const categorySchema = new schema.Entity('categories');

export const goodSchema = new schema.Entity('goods', {
  seller: storeSchema,
  categories: [categorySchema],
});
