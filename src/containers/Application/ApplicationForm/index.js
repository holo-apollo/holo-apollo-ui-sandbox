// @flow
import React, { PureComponent } from 'react';
import autoBind from 'react-autobind';
import { injectIntl, type IntlShape } from 'react-intl';
import { withState, compose } from 'recompose';

import type { SelectOption } from 'common/types';
import { api } from 'helpers/rest';
import PureApplicationForm from './PureApplicationForm';

type Props = {
  intl: IntlShape,
  step: number,
  setStep: number => void,
  applicationId?: number,
  setApplicationId: number => void,
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

  onStepOneSuccess(applicationId: number) {
    this.props.setApplicationId(applicationId);
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

const ApplicationForm = compose(
  // $FlowFixMe
  withState('step', 'setStep', 1),
  withState('applicationId', 'setApplicationId', undefined),
  withState('categoryOptions', 'setCategoryOptions', []),
  injectIntl
)(NotEnchancedApplicationForm);

export default ApplicationForm;
