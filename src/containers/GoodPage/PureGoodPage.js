// @flow
import React from 'react';

import type { GoodWithInfo } from 'containers/Entities/Goods/types';
import Layout from 'containers/Layout';
import { getCategoryPageLink, getGoodPageLink } from 'helpers/urls';

type Props = {
  good: GoodWithInfo,
};

const PureGoodPage = ({ good }: Props) => (
  <Layout
    withSearch={true}
    crumbs={[
      {
        message: good.category.name,
        link: getCategoryPageLink(good.category.slug),
      },
      { message: good.name, link: getGoodPageLink(good.id) },
    ]}
  >
    {good.name}
  </Layout>
);

export default PureGoodPage;
