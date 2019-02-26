// @flow
import styled from 'styled-components';

import palette from 'common/palette';

export const Cont = styled.div`
  display: flex;
  align-items: center;
`;

export const StyledInput = styled.input`
  min-width: 36px;
  height: 36px;
  border: solid 1px ${palette.darkGrey};
  font-size: 14px;
  color: ${palette.darkGrey};
  text-align: center;
  -webkit-appearance: none;
  font: inherit;
  outline: none;
`;

export const Modifier = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 29px;
  height: 30px;
  background-color: ${palette.lightestGrey};
  font-size: 24px;
  color: ${palette.darkGrey};
  cursor: pointer;
  user-select: none;
`;
