// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';
import { withState } from 'recompose';

import Button from 'common/components/buttons/Button';
import {
  Cont,
  ImgCont,
  ContentCont,
  NameCont,
  StoreNameCont,
  PriceCont,
  ActionsCont,
} from './styled';
import messages from './messages';

type Props = {
  name: string,
  mainImageUrl: string,
  price: number,
  priceCurrency: string,
  sellerInfo: {
    storeName: string,
  },
  onPurchase: () => void,
  hovered: boolean,
  setHovered: boolean => void,
};

const PureGoodCard = ({
  name,
  mainImageUrl,
  price,
  priceCurrency,
  sellerInfo,
  onPurchase,
  hovered,
  setHovered,
}: Props) => (
  <Cont
    onMouseOver={() => setHovered(true)}
    onMouseOut={() => setHovered(false)}
  >
    <ImgCont imgUrl={mainImageUrl} />
    <ContentCont>
      <NameCont>{name}</NameCont>
      <StoreNameCont>
        <FormattedMessage {...messages.by} />: {sellerInfo.storeName}
      </StoreNameCont>
      <PriceCont>
        {price} {priceCurrency}
      </PriceCont>
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
