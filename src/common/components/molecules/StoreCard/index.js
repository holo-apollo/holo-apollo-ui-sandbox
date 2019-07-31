// @flow
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Emoji } from 'emoji-mart';

import {
  Cont,
  CoverCont,
  BottomCont,
  ContentCont,
  BannerCont,
  AvatarCont,
  ContentLeftCont,
  ContentRightCont,
  GoodsCountCont,
  RatingCont,
  GoodsCountWrapper,
  GoodsCount,
  RatingWrapper,
  Rating,
  MainInfoCont,
  StoreNameCont,
  LocationCont,
  DescriptionCont,
} from './styled';
import messages from './messages';

type Props = {
  isSmall: boolean,
  storeName: string,
  location: string,
  description: string,
  goodsCount: number,
  coverImageUrl: string,
  avatarUrl: string,
  rating?: number,
};

const StoreCard = ({
  isSmall,
  coverImageUrl,
  avatarUrl,
  goodsCount,
  rating,
  storeName,
  location,
  description,
}: Props) => {
  const [hovered, setHovered] = useState(false);
  return (
    <Cont
      onMouseOver={() => setHovered(true)}
      onMouseOut={() => setHovered(false)}
    >
      <CoverCont isSmall={isSmall} imgUrl={coverImageUrl} hovered={hovered} />
      <BottomCont>
        <ContentCont isSmall={isSmall} hovered={hovered}>
          <AvatarCont isSmall={isSmall} imgUrl={avatarUrl} />
          <ContentLeftCont isSmall={isSmall} hovered={hovered}>
            <MainInfoCont isSmall={isSmall}>
              <StoreNameCont>{storeName}</StoreNameCont>
              <LocationCont>{location}</LocationCont>
            </MainInfoCont>
            <DescriptionCont>{description}</DescriptionCont>
          </ContentLeftCont>
          <ContentRightCont>
            <GoodsCountCont isSmall={isSmall} hovered={hovered}>
              <GoodsCountWrapper>
                <GoodsCount>{goodsCount}</GoodsCount>
                <FormattedMessage {...messages.goods} values={{ goodsCount }} />
              </GoodsCountWrapper>
            </GoodsCountCont>
            <RatingCont>
              <RatingWrapper>
                <Emoji emoji="blue_heart" size={24} />
                <Rating>{rating || '-'}</Rating>
              </RatingWrapper>
            </RatingCont>
          </ContentRightCont>
        </ContentCont>
        {!isSmall && <BannerCont />}
      </BottomCont>
    </Cont>
  );
};

export default StoreCard;
