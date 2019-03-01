import styled from 'styled-components';

import palette from 'common/palette';

export const Cont = styled.div``;

export const PriceCont = styled.div`
  font-size: 18px;
  color: ${palette.darkGrey};
`;

export const DiscountCont = styled.div`
  font-size: 10px;
`;

export const OldPriceCont = styled.span`
  color: ${palette.darkGrey};
  text-decoration: line-through;
  margin-right: 2px;
`;

export const DiscountPercent = styled.span`
  color: ${palette.red};
`;
