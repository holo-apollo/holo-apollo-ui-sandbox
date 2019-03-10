// @flow
import styled from 'styled-components';

import palette from 'common/palette';

export const MainCont = styled.div`
  display: flex;
`;

export const LeftCont = styled.div`
  flex: 1.2 1 0;
`;

export const Image = styled.img`
  width: 100%;
  border: solid 1px ${palette.darkGrey};
  margin-bottom: 20px;
`;

export const RightCont = styled.div`
  flex: 1 1 0;
  margin-left: 130px;
  height: calc(100vh - 200px);
  overflow-y: scroll;
  position: sticky;
  top: 200px;
`;

export const GoodName = styled.h1`
  font-size: 24px;
  font-weight: 500;
  color: ${palette.darkGrey};
`;

export const BottomCont = styled.div`
  margin-top: 100px;
`;

export const WhatElseCont = styled.div`
  font-size: 64px;
  color: ${palette.darkGrey};
`;
