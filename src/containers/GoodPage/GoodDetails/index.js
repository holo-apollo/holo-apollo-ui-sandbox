// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';

import PriceLabel from 'common/components/molecules/PriceLabel';
import Button from 'common/components/buttons/Button';
import type { GoodWithInfo } from 'containers/Entities/Goods/types';
import {
  Cont,
  GoodName,
  Availability,
  PriceLabelCont,
  SpecificationsCont,
  SpecCont,
  SpecName,
  SpecValue,
  PurchaseButtonCont,
} from './styled';
import messages from './messages';

const availabilityMessagesMap = {
  available: messages.available,
  not_available: messages.notAvailable,
  on_request: messages.onRequest,
};

const specNamesMessagesMap = {
  color: messages.color,
  size: messages.size,
};

type Props = {
  good: GoodWithInfo,
  onPurchase: number => void,
};

const GoodDetails = ({ good, onPurchase }: Props) => (
  <Cont>
    <GoodName>{good.name}</GoodName>
    <Availability>
      <FormattedMessage {...availabilityMessagesMap[good.availability]} />
    </Availability>
    <PriceLabelCont>
      <PriceLabel
        price={good.price}
        discount={good.discount}
        priceCurrency={good.priceCurrency}
        size="l"
      />
    </PriceLabelCont>
    <SpecificationsCont>
      {Object.keys(good.specifications)
        .filter(key => good.specifications[key])
        .map(key => (
          <SpecCont key={key}>
            <SpecName>
              <FormattedMessage {...specNamesMessagesMap[key]} />
            </SpecName>
            :<SpecValue>{good.specifications[key]}</SpecValue>
          </SpecCont>
        ))}
    </SpecificationsCont>
    <PurchaseButtonCont>
      <Button width={269} onClick={() => onPurchase(good.id)}>
        <FormattedMessage {...messages.addToCart} />
      </Button>
    </PurchaseButtonCont>
  </Cont>
);

export default GoodDetails;
