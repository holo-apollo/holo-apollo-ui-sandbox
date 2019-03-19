// @flow
import styled, { css } from 'styled-components';

import palette from 'common/palette';

type Props = {
  lineHeight: number,
  maxLines: number,
  ellipsis: string,
  backgroundColor: string,
};

const defaultProps = {
  lineHeight: 1.15,
  maxLines: 2,
  ellipsis: '...',
  backgroundColor: palette.white,
};

const getTruncateTextStyles = ({
  lineHeight,
  maxLines,
  ellipsis,
  backgroundColor,
}: Props) => css`
  line-height: ${lineHeight}em;
  max-height: ${lineHeight * maxLines}em;

  &:before {
    content: '${ellipsis}';
    position: absolute;
    right: 0;
    bottom: 0;
  }
  
  &:after {
    content: '';
    position: absolute;
    right: 0;
    width: 1em;
    height: 1em;
    margin-top: 0.2em;
    background: ${backgroundColor};
  }
`;

const TruncateText = styled.div`
  overflow: hidden;
  position: relative;
  text-align: justify;
  margin-right: -1em;
  padding-right: 1em;
  ${getTruncateTextStyles};
`;

TruncateText.defaultProps = defaultProps;

export default TruncateText;
