// @flow
import styled, { css } from 'styled-components';

import palette from 'common/palette';

const getContStyles = ({ hovered }: { hovered: boolean }) => css`
  border: solid 1px ${hovered ? palette.darkGrey : palette.lightGrey};
`;

export const Cont = styled.div`
  ${getContStyles};
`;

const getImgContStyles = ({
  imgUrl,
  hovered,
}: {
  imgUrl: string,
  hovered: boolean,
}) => css`
  background-image: url(${imgUrl});
  border-bottom: solid 1px ${hovered ? palette.darkGrey : palette.lightGrey};
`;

export const ImgCont = styled.div`
  height: 261px;
  background-repeat: no-repeat;
  background-position: center;
  background-size: cover;
  ${getImgContStyles};
`;

export const ContentCont = styled.div`
  height: 86px;
  padding: 12px;
  position: relative;
`;

export const NameCont = styled.div`
  font-size: 12px;
  font-weight: 500;
  color: ${palette.grey};
  margin-bottom: 10px;
`;

export const StoreNameCont = styled.div`
  font-size: 8px;
  font-weight: 300;
  color: ${palette.grey};
  margin-bottom: 10px;
`;

const getActionsContStyles = ({ visible }: { visible: boolean }) => css`
  display: ${visible ? 'initial' : 'none'};
`;

export const ActionsCont = styled.div`
  position: absolute;
  bottom: 12px;
  right: 12px;
  ${getActionsContStyles};
`;
