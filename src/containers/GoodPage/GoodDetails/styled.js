// @flow
import styled from 'styled-components';

import palette from 'common/palette';

export const Cont = styled.div``;

export const GoodName = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: ${palette.darkGrey};
`;

export const Availability = styled.div`
  margin-top: 10px;
  font-size: 10px;
  color: ${palette.lightEvening};
`;

export const PriceLabelCont = styled.div`
  margin-top: 40px;
`;

export const SpecificationsCont = styled.div`
  margin-top: 40px;
  height: 48px;
  border-top: solid 1px ${palette.lightGrey};
  border-bottom: solid 1px ${palette.lightGrey};
  display: flex;
  align-items: stretch;
`;

export const SpecCont = styled.div`
  flex-grow: 1;
  padding: 0 20px;
  display: flex;
  align-items: center;
  font-size: 12px;

  &:not(:first-child) {
    border-left: solid 1px ${palette.lightGrey};
  }
`;

export const SpecName = styled.span`
  color: ${palette.grey};
`;

export const SpecValue = styled.span`
  color: ${palette.blue};
  margin-left: 5px;
`;

export const PurchaseButtonCont = styled.div`
  margin-top: 40px;
  display: flex;
  justify-content: flex-end;
`;
