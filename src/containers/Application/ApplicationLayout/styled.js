import styled from 'styled-components';

import { MOBILE, TABLET } from 'common/constants';
import palette from 'common/palette';

export const Container = styled.div`
  display: flex;
  width: 985px;
  margin: 68px auto;
  padding: 0 40px;
  overflow-x: hidden;

  @media screen and (max-width: ${TABLET}px) {
    flex-direction: column;
    align-items: center;
    width: 100%;
    box-sizing: border-box;
  }

  @media screen and (max-width: ${MOBILE}px) {
    margin: 30px auto;
    padding: 0 20px;
  }
`;

export const BlockLeft = styled.div`
  display: flex;
  margin-right: 35px;

  @media screen and (max-width: ${TABLET}px) {
    text-align: center;
    margin-right: 0;
    margin-bottom: 50px;
  }
`;

export const LogoCont = styled.div`
  img {
    height: 384px;
  }

  h2 {
    font-size: 36px;
    font-weight: normal;
    line-height: 45px;
  }

  h5 {
    font-size: 10px;
    font-weight: 400;
    font-style: normal;
    line-height: 19px;
  }

  @media screen and (max-width: ${MOBILE}px) {
    img {
      height: 200px;
    }
  }
`;

export const BlockMain = styled.div`
  flex-grow: 1;
  text-align: center;

  h1 {
    font-size: 48px;
    font-weight: normal;
    margin-bottom: 40px;
  }

  h4 {
    font-size: 12px;
    font-weight: normal;
    color: ${palette.grey};
  }

  @media screen and (max-width: ${TABLET}px) {
    margin-left: auto;
    margin-right: auto;
  }
`;
