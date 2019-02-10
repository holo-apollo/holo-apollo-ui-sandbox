// @flow
import React, { Fragment } from 'react';
import { FormattedMessage } from 'react-intl';

import { FormCont } from './styled';
import messages from './messages';

type Props = {
  setSuccess: boolean => void,
};

const ApplicationCreate = ({ setSuccess }: Props) => (
  <Fragment>
    <h1>
      <FormattedMessage {...messages.participantApplication} />
    </h1>
    <h4>
      <FormattedMessage {...messages.greetings} />
    </h4>
    <br />
    <h4>
      <FormattedMessage {...messages.consists} />
    </h4>
    <FormCont>
      <h1 onClick={() => setSuccess(true)}>Application form</h1>
    </FormCont>
  </Fragment>
);

export default ApplicationCreate;
