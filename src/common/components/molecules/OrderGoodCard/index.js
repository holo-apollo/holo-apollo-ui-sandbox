// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';

import palette from 'common/palette';
import IncrementField from 'common/components/inputs/IncrementField';
import Close from 'common/components/icons/Close';
import PriceLabel from 'common/components/molecules/PriceLabel';
import {
  Cont,
  ImgCont,
  ContentCont,
  ContentLeftCont,
  ContentRightCont,
  NameCont,
  SpecificationsCont,
  SpecificationNamesCont,
  SpecificationValuesCont,
  CloseCont,
  PriceLabelCont,
  QuantityCont,
  LabelCont,
  ContentBottomCont,
  NonEditableQuantity,
} from './styled';
import messages from './messages';

type Props = {
  isEditable: boolean,
  id: number,
  name: string,
  mainImageUrl: string,
  price: number,
  priceCurrency: string,
  discount: number,
  specifications: { [string]: string },
  onRemove?: number => void,
  onQuantityChange?: number => void,
  quantity?: number,
};

const OrderGoodCard = ({
  isEditable,
  id,
  name,
  mainImageUrl,
  price,
  priceCurrency,
  discount,
  specifications,
  onRemove,
  onQuantityChange,
  quantity,
}: Props) => (
  <Cont>
    <ImgCont imgUrl={mainImageUrl} />
    <ContentCont>
      <ContentLeftCont>
        <NameCont>{name}</NameCont>
        <SpecificationsCont>
          <SpecificationNamesCont>
            {Object.keys(specifications).map(item => (
              <div key={item}>{item}:</div>
            ))}
          </SpecificationNamesCont>
          <SpecificationValuesCont>
            {Object.values(specifications).map(value => (
              // $FlowFixMe
              <div key={value}>{value}</div>
            ))}
          </SpecificationValuesCont>
        </SpecificationsCont>
        {!isEditable && (
          <ContentBottomCont>
            <PriceLabel
              price={price}
              priceCurrency={priceCurrency}
              discount={discount}
            />
            <QuantityCont>
              <LabelCont>
                <FormattedMessage {...messages.quantity} />:
              </LabelCont>
              <NonEditableQuantity>{quantity || null}</NonEditableQuantity>
            </QuantityCont>
          </ContentBottomCont>
        )}
      </ContentLeftCont>
      {isEditable && (
        <ContentRightCont>
          <CloseCont onClick={() => onRemove && onRemove(id)}>
            <Close height={15} color={palette.darkGrey} />
          </CloseCont>
          <PriceLabelCont>
            <PriceLabel
              price={price}
              priceCurrency={priceCurrency}
              discount={discount}
            />
          </PriceLabelCont>
          <QuantityCont>
            <LabelCont>
              <FormattedMessage {...messages.quantity} />:
            </LabelCont>
            <IncrementField
              initialValue={1}
              minValue={1}
              onChange={onQuantityChange}
            />
          </QuantityCont>
        </ContentRightCont>
      )}
    </ContentCont>
  </Cont>
);

export default OrderGoodCard;
