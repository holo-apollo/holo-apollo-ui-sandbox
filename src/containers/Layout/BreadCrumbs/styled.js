// @flow
import styled from 'styled-components';

import palette from 'common/palette';

export const Cont = styled.div`
  display: flex;
  align-items: center;
  font-size: 12px;

  & > *:not(:first-child) {
    margin-left: 15px;
  }
`;

export const CrumbLink = styled.span`
  color: ${palette.grey};

  &:hover {
    color: ${palette.darkestGrey};
  }
`;

export const LastCrumb = styled.span`
  color: ${palette.lightEvening};
`;

export const Triangle = styled.span`
  width: 0;
  height: 0;
  border-style: solid;
  border-width: 4px 0 4px 6.88px;
  border-color: transparent transparent transparent ${palette.grey};
`;
