// @flow
import React, { useState } from 'react';
import { FormattedMessage } from 'react-intl';
import { Switch, Case } from 'react-case-when';

import { getEnv } from 'helpers/misc';
import ApplicationCreate from '../ApplicationCreate';
import ApplicationSuccess from '../ApplicationSuccess';
import { Container, BlockLeft, BlockMain, LogoCont } from './styled';
import messages from './messages';

const staticRoot = getEnv('STATIC_ROOT') || '';

type Props = {
  pubDate?: string,
};

const PureApplicationLayout = ({ pubDate }: Props) => {
  const [isSuccess, setSuccess] = useState(false);
  return (
    <Container>
      <BlockLeft>
        <LogoCont>
          <img src={`${staticRoot}/img/image_holo.png`} alt="Image Holo" />
          <h2>Holo-Apollo.art</h2>
          <h5>
            <FormattedMessage {...messages.showroomDescription} />
          </h5>
        </LogoCont>
      </BlockLeft>
      <BlockMain>
        <Switch>
          <Case when={isSuccess}>
            <ApplicationSuccess
              pubDate={pubDate ? new Date(pubDate) : undefined}
            />
          </Case>
          <Case when={!isSuccess}>
            <ApplicationCreate setSuccess={setSuccess} />
          </Case>
        </Switch>
      </BlockMain>
    </Container>
  );
};

export default PureApplicationLayout;
