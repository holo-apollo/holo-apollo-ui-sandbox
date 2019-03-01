// @flow
import React from 'react';

import {
  Cont,
  PriceCont,
  DiscountCont,
  OldPriceCont,
  DiscountPercent,
} from './styled';

type Props = {
  price: number,
  discount: number,
  priceCurrency: string,
};

const PriceLabel = ({ price, discount, priceCurrency }: Props) => (
  <Cont>
    <PriceCont>
      {Math.round(price * (1 - discount / 100))} {priceCurrency}
    </PriceCont>
    {discount > 0 && (
      <DiscountCont>
        <OldPriceCont>{price}</OldPriceCont>
        <DiscountPercent>-{discount}%</DiscountPercent>
      </DiscountCont>
    )}
  </Cont>
);

export default PriceLabel;
