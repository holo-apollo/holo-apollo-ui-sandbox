// @flow
import styled from 'styled-components';

import palette from 'common/palette';

export const Cont = styled.div`
  padding: 30px 20px;
  display: flex;
  justify-content: center;
  border-top: solid 1px ${palette.grey};
`;

export const ContentCont = styled.div`
  max-width: 1300px;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
`;

export const LeftCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RightCont = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;

export const LinksCont = styled.div`
  display: flex;
  margin-bottom: 40px;
`;

export const SocialLinksCont = styled.div`
  display: flex;

  & > *:not(:first-child) {
    margin-left: 20px;
  }
`;

export const LinksColumn = styled.div`
  margin-right: 80px;
`;

export const LinksColumnHeader = styled.div`
  margin-bottom: 15px;
  font-size: 12px;
  font-weight: 500;
  color: ${palette.darkGrey};
`;

export const LinksColumnBody = styled.div`
  font-size: 12px;
  color: ${palette.grey};
  display: flex;
  flex-direction: column;

  a {
    margin-bottom: 8px;

    &:hover {
      color: ${palette.darkestGrey};
    }
  }
`;

export const RightTopCont = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-bottom: 40px;
`;

export const AuthLinksCont = styled.div`
  display: flex;
  margin-bottom: 25px;

  & > *:not(:first-child) {
    margin-left: 20px;
  }
`;

export const BrandingCont = styled.div`
  display: flex;
  align-items: flex-end;
`;

export const InfoCont = styled.div`
  text-align: right;
  margin-right: 23px;

  h1 {
    font-size: 36px;
    font-weight: normal;
    color: ${palette.darkGrey};
  }

  h3 {
    font-size: 12px;
    font-weight: 300;
    color: ${palette.darkGrey};
  }

  p {
    font-size: 9px;
    font-weight: 300;
    color: ${palette.grey};
  }
`;

export const Logo = styled.img`
  width: 87px;
`;
