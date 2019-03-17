// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { prop, isEmpty } from 'ramda';

import GoodCard from 'common/components/molecules/GoodCard';
import type { GoodWithInfo, GoodImage } from 'containers/Entities/Goods/types';
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
  SimilarGoodsCont,
} from './styled';
import messages from './messages';

const getMainImageUrl = (images: GoodImage[]): string => {
  const mainImages = images.filter(prop('isMain'));
  if (!isEmpty(mainImages)) return mainImages[0].imageUrl;
  if (!isEmpty(images)) return images[0].imageUrl;
  return '';
};

// TODO: add Helmet

type Props = {
  good: GoodWithInfo,
  similarGoods: GoodWithInfo[],
  onPurchase: number => void,
};

const PureGoodPage = ({ good, similarGoods, onPurchase }: Props) => (
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
        <FormattedMessage {...messages.whatElse} />
      </WhatElseCont>
      <SimilarGoodsCont>
        {similarGoods.map(sGood => (
          <GoodCard
            key={sGood.id}
            {...sGood}
            mainImageUrl={getMainImageUrl(sGood.images)}
            onPurchase={onPurchase}
          />
        ))}
      </SimilarGoodsCont>
    </BottomCont>
  </Layout>
);

export default PureGoodPage;
