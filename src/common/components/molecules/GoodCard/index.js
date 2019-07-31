// @flow
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
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
  onPurchase: number => void,
};

const GoodCard = ({
  id,
  name,
  mainImageUrl,
  price,
  priceCurrency,
  discount,
  seller,
  onPurchase,
}: Props) => {
  const [hovered, setHovered] = useState(false);
  return (
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
          <Button
            width={110}
            fontWeight="normal"
            onClick={() => onPurchase(id)}
          >
            <FormattedMessage {...messages.purchase} />
          </Button>
        </ActionsCont>
      </ContentCont>
    </Cont>
  );
};

export default GoodCard;
