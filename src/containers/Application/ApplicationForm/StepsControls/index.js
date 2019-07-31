// @flow
import React from 'react';
import type { IntlShape } from 'react-intl';

import FormStep from 'common/components/navigation/FormStep';
import { StepsControlsCont } from './styled';
import messages from './messages';

type Props = {
  currentStep: number,
  setStep: number => void,
  applicationCreated: boolean,
  intl: IntlShape,
};

const StepsControls = ({
  currentStep,
  setStep,
  applicationCreated,
  intl,
}: Props) => {
  function onClickStepOne() {
    if (currentStep !== 1) {
      setStep(1);
    }
  }

  function onClickStepTwo() {
    if (currentStep !== 2 && applicationCreated) {
      setStep(2);
    }
  }
  return (
    <StepsControlsCont>
      <FormStep
        header={intl.formatMessage(messages.stepOneHeader)}
        helpText={intl.formatMessage(messages.stepOneHelptext)}
        isCurrent={currentStep === 1}
        isDisabled={false}
        onClick={onClickStepOne}
      />
      <FormStep
        header={intl.formatMessage(messages.stepTwoHeader)}
        helpText={intl.formatMessage(messages.stepTwoHelptext)}
        isCurrent={currentStep === 2}
        isDisabled={currentStep === 1 && !applicationCreated}
        onClick={onClickStepTwo}
      />
    </StepsControlsCont>
  );
};

export default StepsControls;
