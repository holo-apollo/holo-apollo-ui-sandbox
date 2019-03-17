// @flow
export type Category = {
  id: number,
  slug: string,
  name: string,
  isMain: boolean,
};

export type CategoriesMap = { [number]: Category };
