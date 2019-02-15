// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { frontloadConnect } from 'react-frontload';
import autoBind from 'react-autobind';
import { injectIntl, type IntlShape } from 'react-intl';
import { withState, compose } from 'recompose';

import type { SelectOption } from 'common/types';
import { api } from 'helpers/rest';
import { type ApplicationData } from '../types';
import PureApplicationForm from './PureApplicationForm';
import { getApplicationId, getCategoryOptions } from '../selectors';
import { addApplicationData, addCategoryOptions } from '../actions';

type Props = {
  intl: IntlShape,
  step: number,
  setStep: number => void,
  applicationId?: number,
  addApplicationData: ApplicationData => void,
  categoryOptions: SelectOption<string>[],
  addCategoryOptions: (SelectOption<string>[]) => void,
  onSuccess: () => void,
};

class NotEnchancedApplicationForm extends PureComponent<Props> {
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
  { addApplicationData, addCategoryOptions }
);

const frontload = async (props: Props) => {
  const resp = await api.get('stores/applications/categories/');
  if (resp.ok && resp.data) {
    props.addCategoryOptions(resp.data);
  }
};

const withFrontload = frontloadConnect(frontload, {
  onMount: true,
  onUpdate: false,
});

const ApplicationForm = compose(
  withConnect,
  withFrontload,
  // $FlowFixMe
  withState('step', 'setStep', 1),
  injectIntl
)(NotEnchancedApplicationForm);

export default ApplicationForm;
