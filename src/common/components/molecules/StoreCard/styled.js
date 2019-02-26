// @flow
import styled, { css } from 'styled-components';

import palette from 'common/palette';

export const Cont = styled.div`
  color: ${palette.grey};
`;

const getCoverContStyles = ({
  isSmall,
  imgUrl,
  hovered,
}: {
  isSmall: boolean,
  imgUrl: string,
  hovered: boolean,
}) => css`
  height: ${isSmall ? 100 : 400}px;
  background-image: url(${imgUrl});
  border: solid 1px ${isSmall && hovered ? palette.darkGrey : palette.lightGrey};
`;

export const CoverCont = styled.div`
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${getCoverContStyles};
`;

export const BottomCont = styled.div`
  display: flex;
`;

const getContentContStyles = ({
  isSmall,
  hovered,
}: {
  isSmall: boolean,
  hovered: boolean,
}) => css`
  border: solid 1px ${isSmall && hovered ? palette.darkGrey : palette.lightGrey};
  border-top: none;
`;

export const ContentCont = styled.div`
  display: flex;
  position: relative;
  min-height: 200px;
  flex: 1;
  ${getContentContStyles};
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
  hovered,
}: {
  isSmall: boolean,
  hovered: boolean,
}) => css`
  padding: ${isSmall ? 35 : 23}px;
  border-right: solid 1px
    ${isSmall && hovered ? palette.darkGrey : palette.lightGrey};
`;

export const ContentLeftCont = styled.div`
  flex-basis: 70%;
  ${getContentLeftContStyles};
`;

export const ContentRightCont = styled.div`
  flex-basis: 30%;
  display: flex;
  flex-direction: column;
`;

const getGoodsCountContStyles = ({
  isSmall,
  hovered,
}: {
  isSmall: boolean,
  hovered: boolean,
}) => css`
  border-bottom: 1px solid
    ${isSmall && hovered ? palette.darkGrey : palette.lightGrey};
`;

export const GoodsCountCont = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 12px;
  ${getGoodsCountContStyles};
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
