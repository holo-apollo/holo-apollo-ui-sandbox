// @flow
import React from 'react';
import { FormattedMessage } from 'react-intl';

import { getEnv } from 'helpers/misc';
import Subscription from '../Subscription';
import { Container, Content, ImageHolo, InstaIcon } from './styled';
import messages from './messages';

type Props = {
  unsubscribeToken?: string,
};

const staticRoot = getEnv('STATIC_ROOT') || '';

const PureHomePageLayout = ({ unsubscribeToken }: Props) => (
  <Container>
    <Content>
      <h1>
        <FormattedMessage {...messages.comingSoon} />
      </h1>
      <ImageHolo src={`${staticRoot}/img/image_holo.png`} alt="Holo" />
      <h3>
        {unsubscribeToken && <FormattedMessage {...messages.welcomeBack} />}
        {!unsubscribeToken && <FormattedMessage {...messages.hello} />}
      </h3>
      <h5>
        {!unsubscribeToken && <FormattedMessage {...messages.welcome} />}{' '}
        <FormattedMessage {...messages.toHolloApollo} />
      </h5>
      <h5>
        {unsubscribeToken && <FormattedMessage {...messages.toMarketPlace} />}
        {!unsubscribeToken && <FormattedMessage {...messages.onMarketPlace} />}
      </h5>
      <Subscription token={unsubscribeToken} />
      <a href="https://www.instagram.com/holo.apollo.art/" target="_blank">
        <InstaIcon src={`${staticRoot}/img/instaicon.png`} alt="instaicon" />
      </a>
    </Content>
  </Container>
);

export default PureHomePageLayout;
