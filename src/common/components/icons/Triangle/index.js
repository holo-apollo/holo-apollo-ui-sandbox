// @flow
import styled, { css } from 'styled-components';

import palette from 'common/palette';

type Props = {
  height: number,
  color: string,
  direction: 'up' | 'down' | 'left' | 'right',
};

const getStylesUp = ({ height, color }: Props) => css`
  border-width: 0 ${height * 0.5}px ${height * 0.866}px ${height * 0.5}px;
  border-color: transparent transparent ${color} transparent;
`;

const getStylesDown = ({ height, color }: Props) => css`
  border-width: ${height * 0.866}px ${height * 0.5}px 0 ${height * 0.5}px;
  border-color: ${color} transparent transparent transparent;
`;

const getStylesLeft = ({ height, color }: Props) => css`
  border-width: ${height * 0.5}px ${height * 0.866}px ${height * 0.5}px 0;
  border-color: transparent ${color} transparent transparent;
`;

const getStylesRight = ({ height, color }: Props) => css`
  border-width: ${height * 0.5}px 0 ${height * 0.5}px ${height * 0.866}px;
  border-color: transparent transparent transparent ${color};
`;

const getStyles = ({ direction }: Props) => css`
  ${direction === 'up' && getStylesUp};
  ${direction === 'down' && getStylesDown};
  ${direction === 'left' && getStylesLeft};
  ${direction === 'right' && getStylesRight};
`;

const Triangle = styled.span`
  width: 0;
  height: 0;
  border-style: solid;
  ${getStyles};
`;

Triangle.defaultProps = {
  color: palette.grey,
};

export default Triangle;
