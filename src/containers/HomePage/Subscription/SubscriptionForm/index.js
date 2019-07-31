// @flow
import React, { useState } from 'react';
import { withFormik } from 'formik';
import type { IntlShape } from 'react-intl';

import PureSubscriptionForm from './PureSubscriptionForm';
import handleSubmit from './handleSubmit';
import validate from './validate';

type Props = {
  intl: IntlShape,
};

const SubscriptionFormWithFormik = withFormik({ handleSubmit, validate })(
  PureSubscriptionForm
);

const SubscriptionForm = (props: Props) => {
  const [isSuccess, setSuccess] = useState(false);
  return (
    <SubscriptionFormWithFormik
      {...props}
      isSuccess={isSuccess}
      setSuccess={setSuccess}
    />
  );
};

export default SubscriptionForm;
