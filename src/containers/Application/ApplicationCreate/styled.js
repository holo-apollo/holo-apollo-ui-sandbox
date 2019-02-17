import styled from 'styled-components';
import { TABLET } from 'common/constants';

export const FormCont = styled.div`
  margin-top: 53px;
  margin-left: auto;
  margin-right: auto;
  max-width: 420px;

  @media screen and (max-width: ${TABLET}px) {
    margin-top: 50px;
  }
`;
