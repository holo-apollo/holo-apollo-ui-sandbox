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
  size: 'l' | 's',
};

const PriceLabel = ({ price, discount, priceCurrency, size }: Props) => (
  <Cont>
    <PriceCont size={size}>
      {Math.round(price * (1 - discount / 100))} {priceCurrency}
    </PriceCont>
    {discount > 0 && (
      <DiscountCont size={size}>
        <OldPriceCont>{price}</OldPriceCont>
        <DiscountPercent>-{discount}%</DiscountPercent>
      </DiscountCont>
    )}
  </Cont>
);

PriceLabel.defaultProps = {
  size: 's',
};

export default PriceLabel;
