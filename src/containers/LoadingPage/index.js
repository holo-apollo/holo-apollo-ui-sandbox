import React from 'react';
import styled from 'styled-components';
import { FormattedMessage } from 'react-intl';
import { Switch, Case } from 'react-case-when';

import DoubleBounceSpinner from 'common/components/spinners/DoubleBounceSpinner';
import Button from 'common/components/buttons/Button';
import messages from './messages';

const Cont = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ButtonCont = styled.div`
  margin-top: 30px;
`;

const LoadingPage = ({ error, timedOut, pastDelay, retry }) => {
  const button = (
    <ButtonCont>
      <Button onClick={retry} width={250}>
        <FormattedMessage {...messages.retry} />
      </Button>
    </ButtonCont>
  );
  return (
    <Cont>
      <Switch>
        <Case when={error}>
          <FormattedMessage {...messages.error} />
          {button}
        </Case>
        <Case when={timedOut}>
          <FormattedMessage {...messages.timedOut} />
          {button}
        </Case>
        <Case when={pastDelay}>
          <DoubleBounceSpinner />
        </Case>
      </Switch>
    </Cont>
  );
};

export default LoadingPage;
