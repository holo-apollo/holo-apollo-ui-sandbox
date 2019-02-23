// @flow
import styled, { css } from 'styled-components';

import palette from 'common/palette';

export const Cont = styled.div`
  color: ${palette.grey};
`;

const getCoverContStyles = ({
  isSmall,
  imgUrl,
}: {
  isSmall: boolean,
  imgUrl: string,
}) => css`
  height: ${isSmall ? 100 : 400}px;
  background-image: url(${imgUrl});
`;

export const CoverCont = styled.div`
  border: solid 1px ${palette.lightGrey};
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${getCoverContStyles};
`;

export const BottomCont = styled.div`
  display: flex;
`;

export const ContentCont = styled.div`
  display: flex;
  position: relative;
  border: solid 1px ${palette.lightGrey};
  border-top: none;
  min-height: 200px;
  flex: 1;
`;

export const BannerCont = styled.div`
  flex: 1;
`;

export const getAvatarContStyles = ({
  isSmall,
  imgUrl,
}: {
  isSmall: boolean,
  imgUrl: string,
}) => css`
  width: ${isSmall ? 100 : 150}px;
  height: ${isSmall ? 100 : 150}px;
  left: ${isSmall ? 35 : 23}px;
  background-image: url(${imgUrl});
`;

export const AvatarCont = styled.div`
  border-radius: 50%;
  border: solid 3px ${palette.darkGrey};
  box-sizing: border-box;
  position: absolute;
  top: 0;
  transform: translateY(-50%);
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${getAvatarContStyles};
`;

export const getContentLeftContStyles = ({
  isSmall,
}: {
  isSmall: boolean,
}) => css`
  padding: ${isSmall ? 35 : 23}px;
`;

export const ContentLeftCont = styled.div`
  flex-basis: 70%;
  border-right: solid 1px ${palette.lightGrey};
  ${getContentLeftContStyles};
`;

export const ContentRightCont = styled.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
`;

export const GoodsCountCont = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-bottom: solid 1px ${palette.lightGrey};
  font-size: 12px;
`;

export const RatingCont = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GoodsCountWrapper = styled.span`
  display: flex;
  align-items: baseline;
`;

export const GoodsCount = styled.span`
  font-size: 24px;
  margin-right: 5px;
`;

export const RatingWrapper = styled.span`
  display: flex;
  align-items: center;
`;

export const Rating = styled.span`
  font-size: 24px;
  margin-left: 5px;
`;

const getMainInfoContStyles = ({ isSmall }: { isSmall: boolean }) => css`
  margin-top: ${isSmall ? 30 : 0}px;
  margin-left: ${isSmall ? 0 : 164}px;
  margin-bottom: ${isSmall ? 12 : 33}px;
`;

export const MainInfoCont = styled.div`
  ${getMainInfoContStyles};
`;

export const StoreNameCont = styled.div`
  font-size: 18px;
  font-weight: 500;
  margin-bottom: 8px;
`;

export const LocationCont = styled.div`
  font-size: 12px;
`;

export const DescriptionCont = styled.div`
  font-size: 12px;
`;
