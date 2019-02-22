// @flow
import React, { Fragment } from 'react';
import { FormattedMessage, FormattedDate } from 'react-intl';
import { Emoji } from 'emoji-mart';
import { Case } from 'react-case-when';

import { getEnv } from 'helpers/misc';
import {
  EmojiCont,
  Divider,
  PubDateCont,
  PubDateHelpCont,
  Instalogo,
} from './styled';
import messages from './messages';

const staticRoot = getEnv('STATIC_ROOT') || '';

type Props = {
  pubDate?: Date,
};

const ApplicationSuccess = ({ pubDate }: Props) => (
  <Fragment>
    <h1>
      <FormattedMessage {...messages.cool} />
    </h1>
    <EmojiCont>
      <Emoji emoji="clap" size={30} />
    </EmojiCont>
    <h4>
      <FormattedMessage {...messages.submittedSuccessfully} />
    </h4>
    <h4>
      <FormattedMessage {...messages.confirmation} />
    </h4>
    <Divider />
    <Case when={pubDate !== undefined}>
      <PubDateCont>
        <FormattedDate
          value={pubDate}
          year="numeric"
          month="long"
          day="2-digit"
        />
      </PubDateCont>
      <PubDateHelpCont>
        <FormattedMessage {...messages.pubDateExplanation} />
      </PubDateHelpCont>
    </Case>
    <a href="https://www.instagram.com/holo.apollo.art/" target="_blank">
      <Instalogo
        src={`${staticRoot}/img/instagram-logo.png`}
        alt="Instagram logo"
      />
    </a>
  </Fragment>
);

export default ApplicationSuccess;
