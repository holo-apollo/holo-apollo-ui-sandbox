import styled, { css } from 'styled-components';

import palette from 'common/palette';

export const Cont = styled.div``;

type StyledProps = {
  size: 'l' | 's',
};

const getPriceContStyles = ({ size }: StyledProps) => css`
  font-size: ${size === 'l' ? 24 : 18}px;
`;

export const PriceCont = styled.div`
  color: ${palette.darkGrey};
  ${getPriceContStyles};
`;

const getDiscountContStyles = ({ size }: StyledProps) => css`
  font-size: ${size === 'l' ? 13 : 10}px;
`;

export const DiscountCont = styled.div`
  ${getDiscountContStyles};
`;

export const OldPriceCont = styled.span`
  color: ${palette.darkGrey};
  text-decoration: line-through;
  margin-right: 2px;
`;

export const DiscountPercent = styled.span`
  color: ${palette.red};
`;
