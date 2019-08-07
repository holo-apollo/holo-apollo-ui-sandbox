// @flow
import styled from 'styled-components';

import palette from 'common/palette';

const AuthLink = styled.span`
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: 12px;
  color: ${palette.blue};

  &:hover {
    color: ${palette.deepBlue};
  }
`;

export default AuthLink;
