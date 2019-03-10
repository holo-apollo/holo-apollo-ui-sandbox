// @flow
import React from 'react';

import type { GoodWithInfo } from 'containers/Entities/Goods/types';
import Layout from 'containers/Layout';

type Props = {
  good: GoodWithInfo,
};

const PureGoodPage = ({ good }: Props) => (
  <Layout
    withSearch={true}
    crumbs={[
      { message: good.category.name, link: `category/${good.category.slug}` },
      { message: good.name, link: `goods/${good.id}` },
    ]}
  >
    {good.name}
  </Layout>
);

export default PureGoodPage;
