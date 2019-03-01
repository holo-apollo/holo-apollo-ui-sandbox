// @flow
import styled, { css } from 'styled-components';

import palette from 'common/palette';

export const Cont = styled.div`
  min-height: 120px;
  border-bottom: 1px solid ${palette.lightGrey};
  padding-bottom: 24px;
  display: flex;
`;

const getImgContStyles = ({ imgUrl }: { imgUrl: string }) => css`
  background-image: url(${imgUrl});
`;

export const ImgCont = styled.div`
  width: 132px;
  height: 120px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  margin-right: 30px;
  ${getImgContStyles};
`;

export const ContentCont = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

export const ContentLeftCont = styled.div`
  flex-grow: 1;
`;

export const ContentRightCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;

export const NameCont = styled.div`
  color: ${palette.darkGrey};
  margin-bottom: 10px;
`;

export const SpecificationsCont = styled.div`
  display: flex;
`;

export const SpecificationNamesCont = styled.div`
  margin-right: 10px;
  font-size: 12px;
  color: ${palette.grey};
  line-height: 1.75;
  text-transform: capitalize;
`;

export const SpecificationValuesCont = styled.div`
  font-size: 12px;
  color: ${palette.darkGrey};
  line-height: 1.75;
`;

export const CloseCont = styled.div`
  cursor: pointer;
  margin-bottom: 18px;
`;

export const PriceLabelCont = styled.div`
  margin-bottom: 13px;
`;

export const QuantityCont = styled.div`
  display: flex;
  align-items: center;
`;

export const LabelCont = styled.span`
  font-size: 12px;
  color: ${palette.darkGrey};
  margin-right: 15px;
`;

export const ContentBottomCont = styled.div`
  margin-top: 18px;
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

export const NonEditableQuantity = styled.span`
  font-size: 14px;
  color: ${palette.darkGrey};
`;
