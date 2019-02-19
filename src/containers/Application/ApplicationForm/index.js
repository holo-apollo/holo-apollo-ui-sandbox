// @flow
import * as React from 'react';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import { injectIntl, type IntlShape } from 'react-intl';
import { withState, compose, type HOC } from 'recompose';

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

class NotEnchancedApplicationForm extends React.PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    autoBind(this);
  }

  onStepOneSuccess(applicationData: ApplicationData) {
    this.props.addApplicationData(applicationData);
    this.props.setStep(2);
  }

  render() {
    return (
      <PureApplicationForm
        {...this.props}
        onStepOneSuccess={this.onStepOneSuccess}
        onStepTwoSuccess={this.props.onSuccess}
      />
    );
  }
}

const mapStateToProps = state => ({
  applicationId: getApplicationId(state),
  categoryOptions: getCategoryOptions(state),
});

const withConnect = connect(
  mapStateToProps,
  { addApplicationData }
);

// eslint-disable-next-line prettier/prettier
const withStep: HOC<*, React.ElementConfig<typeof NotEnchancedApplicationForm>> =
  withState('step', 'setStep', 1);

const ApplicationForm = compose(
  withConnect,
  withStep,
  injectIntl
)(NotEnchancedApplicationForm);

export default ApplicationForm;
