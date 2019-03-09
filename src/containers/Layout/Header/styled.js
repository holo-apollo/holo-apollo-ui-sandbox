// @flow
import styled, { css } from 'styled-components';

import palette from 'common/palette';

export const Cont = styled.div`
  padding: 0 20px;
  display: flex;
  justify-content: center;
  height: 78px;
  border-bottom: solid 1px ${palette.grey};
`;

export const ContentCont = styled.div`
  max-width: 1300px;
  flex-grow: 1;
  display: flex;
  justify-content: space-between;
`;

export const LeftCont = styled.div`
  margin-right: 20px;
`;

export const MiddleCont = styled.div`
  display: flex;
`;

export const RightCont = styled.div`
  margin-left: 20px;
  display: flex;
`;

export const Logo = styled.img`
  width: 78px;
  margin-top: 4px;
`;

export const MenuCont = styled.div`
  display: flex;
`;

const getMenuItemStyles = ({ isActive }: { isActive: boolean }) => css`
  ${isActive && `border-top: solid 5px ${palette.blue}`};
`;

export const MenuItem = styled.span`
  height: 100%;
  font-size: 12px;
  color: ${palette.grey};
  display: flex;
  align-items: center;
  padding: 0 12px;
  border-top: solid 5px transparent;
  border-bottom: solid 5px transparent;
  ${getMenuItemStyles};

  &:hover {
    color: ${palette.darkestGrey};
    border-top: solid 5px ${palette.blue};
  }
`;

export const ProfileMenuCont = styled.div`
  margin-right: 20px;
  display: flex;
`;

export const AuthLinkCont = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  color: ${palette.blue};

  &:not(:first-child) {
    margin-left: 16px;
  }

  &:hover {
    color: ${palette.deepBlue};
  }
`;

export const ShoppingCont = styled.div`
  height: 100%;
  width: 90px;
  border-left: solid 1px ${palette.grey};
  border-right: solid 1px ${palette.grey};
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const GoodOrdersCountCont = styled.span`
  font-size: 14px;
  font-weight: 600;
  color: ${palette.darkGrey};
  margin-left: 5px;
`;
