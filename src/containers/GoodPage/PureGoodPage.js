// @flow
import React from 'react';

import type { GoodWithInfo } from 'containers/Entities/Goods/types';
import Layout from 'containers/Layout';
import { getCategoryPageLink, getGoodPageLink } from 'helpers/urls';
import {
  MainCont,
  LeftCont,
  RightCont,
  BottomCont,
  Image,
  GoodName,
  WhatElseCont,
} from './styled';

// TODO: add Helmet

type Props = {
  good: GoodWithInfo,
  similarGoods: GoodWithInfo[],
};

const PureGoodPage = ({ good }: Props) => (
  <Layout
    withSearch={true}
    crumbs={[
      ...good.categories.map(category => ({
        message: category.name,
        link: getCategoryPageLink(category.slug),
      })),
      { message: good.name, link: getGoodPageLink(good.id) },
    ]}
  >
    <MainCont>
      <LeftCont>
        {good.images.map(image => (
          <Image src={image.imageUrl} key={image.imageUrl} />
        ))}
      </LeftCont>
      <RightCont>
        <GoodName>{good.name}</GoodName>
        <div style={{ height: '1000px', background: 'yellow' }} />
      </RightCont>
    </MainCont>
    <BottomCont>
      <WhatElseCont>
        What else?
        <div style={{ height: '300px', background: 'yellow' }} />
      </WhatElseCont>
    </BottomCont>
  </Layout>
);

export default PureGoodPage;
