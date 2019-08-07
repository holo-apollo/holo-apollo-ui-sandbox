// @flow
import React, { useState } from 'react';
import { connect } from 'react-redux';
import { injectIntl, type IntlShape } from 'react-intl';
import { compose } from 'ramda';

import type { SelectOption } from 'common/types';
import { type ApplicationData } from '../types';
import PureApplicationForm from './PureApplicationForm';
import { getApplicationId, getCategoryOptions } from '../selectors';
import { addApplicationData } from '../actions';

type Props = {
  intl: IntlShape,
  step: number,
  setStep: number => void,
  applicationId?: number,
  addApplicationData: ApplicationData => void,
  categoryOptions: SelectOption<string>[],
  onSuccess: () => void,
};

const NotEnchancedApplicationForm = (props: Props) => {
  const [step, setStep] = useState(1);

  function onStepOneSuccess(applicationData: ApplicationData) {
    props.addApplicationData(applicationData);
    setStep(2);
  }

  return (
    <PureApplicationForm
      {...props}
      step={step}
      setStep={setStep}
      onStepOneSuccess={onStepOneSuccess}
      onStepTwoSuccess={props.onSuccess}
    />
  );
};

const mapStateToProps = state => ({
  applicationId: getApplicationId(state),
  categoryOptions: getCategoryOptions(state),
});

const withConnect = connect(
  mapStateToProps,
  { addApplicationData }
);

const ApplicationForm = compose(
  withConnect,
  injectIntl
)(NotEnchancedApplicationForm);

export default ApplicationForm;
