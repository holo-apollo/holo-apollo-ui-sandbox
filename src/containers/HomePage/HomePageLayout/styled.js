import styled from 'styled-components';

import { MOBILE } from 'common/constants';

export const Container = styled.div`
  margin: 0 20px;
`;

export const Content = styled.div`
  text-align: center;
  margin: 75px auto;

  h1 {
    font-size: 72px;
    font-weight: bold;
    text-transform: uppercase;
    margin: 10px 0;
  }

  h3 {
    font-size: 60px;
    font-weight: bold;
    margin: 10px 0;
  }

  h4 {
    font-size: 36px;
    font-weight: bold;
    margin: 10px 0;
  }

  h5 {
    font-size: 16px;
    font-weight: 300;
    margin: 10px 0;
  }

  @media screen and (max-width: ${MOBILE}px) {
    margin: 40px auto;

    h1,
    h3,
    h4 {
      font-size: 30px;
    }

    h5 {
      font-size: 14px;
    }
  }
`;

export const InstaIcon = styled.img`
  margin-top: 35px;

  @media screen and (max-width: ${MOBILE}px) {
    margin-top: 20px;
  }
`;

export const ImageHolo = styled.img`
  @media screen and (max-width: ${MOBILE}px) {
    width: 125px;
  }
`;
