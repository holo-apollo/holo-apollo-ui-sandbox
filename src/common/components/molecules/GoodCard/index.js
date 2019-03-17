// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { withState } from 'recompose';
import Link from 'next/link';

import Button from 'common/components/buttons/Button';
import PriceLabel from 'common/components/molecules/PriceLabel';
import { getGoodPageLink } from 'helpers/urls';
import {
  Cont,
  ImgCont,
  ContentCont,
  NameCont,
  StoreNameCont,
  ActionsCont,
} from './styled';
import messages from './messages';

type Props = {
  id: number,
  name: string,
  mainImageUrl: string,
  price: number,
  priceCurrency: string,
  discount: number,
  seller: {
    storeName: string,
  },
  onPurchase: () => void,
  hovered: boolean,
  setHovered: boolean => void,
};

const PureGoodCard = ({
  id,
  name,
  mainImageUrl,
  price,
  priceCurrency,
  discount,
  seller,
  onPurchase,
  hovered,
  setHovered,
}: Props) => (
  <Cont
    onMouseOver={() => setHovered(true)}
    onMouseOut={() => setHovered(false)}
    hovered={hovered}
  >
    <Link href={getGoodPageLink(id)}>
      <a>
        <ImgCont imgUrl={mainImageUrl} hovered={hovered} />
      </a>
    </Link>
    <ContentCont>
      <Link href={getGoodPageLink(id)}>
        <a>
          <NameCont>{name}</NameCont>
        </a>
      </Link>
      <StoreNameCont>
        <FormattedMessage {...messages.by} />: {seller.storeName}
      </StoreNameCont>
      <PriceLabel
        price={price}
        priceCurrency={priceCurrency}
        discount={discount}
      />
      <ActionsCont visible={hovered}>
        <Button width={110} fontWeight="normal" onClick={onPurchase}>
          <FormattedMessage {...messages.purchase} />
        </Button>
      </ActionsCont>
    </ContentCont>
  </Cont>
);

// $FlowFixMe
const GoodCard = withState('hovered', 'setHovered', false)(PureGoodCard);

export default GoodCard;
