// @flow
import * as React from 'react';
import { FormattedMessage } from 'react-intl';
import { Switch, Case } from 'react-case-when';

import ApplicationCreate from '../ApplicationCreate';
import ApplicationSuccess from '../ApplicationSuccess';
import { Container, BlockLeft, BlockMain, LogoCont } from './styled';
import messages from './messages';

const staticRoot = process.env.STATIC_ROOT || '';

type Props = {
  isSuccess: boolean,
  setSuccess: boolean => void,
};

const PureApplicationLayout = ({ isSuccess, setSuccess }: Props) => (
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
          <ApplicationSuccess pubDate={new Date()} />
        </Case>
        <Case when={!isSuccess}>
          <ApplicationCreate setSuccess={setSuccess} />
        </Case>
      </Switch>
    </BlockMain>
  </Container>
);

export default PureApplicationLayout;
