// @flow
import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import autoBind from 'react-autobind';
import { injectIntl, type IntlShape } from 'react-intl';
import { withState, compose } from 'recompose';

import type { SelectOption } from 'common/types';
import { api } from 'helpers/rest';
import { type ApplicationData } from '../types';
import PureApplicationForm from './PureApplicationForm';
import { getApplicationId } from '../selectors';
import { addApplicationData } from '../actions';

type Props = {
  intl: IntlShape,
  step: number,
  setStep: number => void,
  applicationId?: number,
  addApplicationData: ApplicationData => void,
  categoryOptions: SelectOption<string>[],
  setCategoryOptions: (SelectOption<string>[]) => void,
  onSuccess: () => void,
};

class NotEnchancedApplicationForm extends PureComponent<Props> {
  constructor(props: Props) {
    super(props);
    autoBind(this);
  }

  componentDidMount() {
    this.fetchCategoryOptions();
  }

  async fetchCategoryOptions() {
    const resp = await api.get('stores/applications/categories/');
    if (resp.ok && resp.data) {
      this.props.setCategoryOptions(resp.data);
    }
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
});

const withConnect = connect(
  mapStateToProps,
  { addApplicationData }
);

const ApplicationForm = compose(
  withConnect,
  // $FlowFixMe
  withState('step', 'setStep', 1),
  withState('categoryOptions', 'setCategoryOptions', []),
  injectIntl
)(NotEnchancedApplicationForm);

export default ApplicationForm;
