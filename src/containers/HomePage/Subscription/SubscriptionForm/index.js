// @flow
import * as React from 'react';
import { withFormik } from 'formik';
import { withState, compose, type HOC } from 'recompose';

import PureSubscriptionForm from './PureSubscriptionForm';
import handleSubmit from './handleSubmit';
import validate from './validate';

// eslint-disable-next-line prettier/prettier
const withSuccess: HOC<*, React.ElementConfig<typeof PureSubscriptionForm>> =
  withState('isSuccess', 'setSuccess', false);

const SubscriptionForm = compose(
  withSuccess,
  withFormik({ handleSubmit, validate })
)(PureSubscriptionForm);

export default SubscriptionForm;
