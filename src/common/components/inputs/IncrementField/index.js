// @flow
import React, { useState } from 'react';

import { Cont, StyledInput, Modifier } from './styled';

type Props = {
  initialValue: number,
  maxValue?: number,
  minValue?: number,
  step: number,
  onChange?: number => void,
  isPercent: boolean,
};

const defaultProps = {
  initialValue: 0,
  step: 1,
  isPercent: false,
};

const IncrementField = ({
  initialValue,
  minValue,
  maxValue,
  step,
  onChange,
  isPercent,
}: Props) => {
  const [value, setValue] = useState(initialValue);

  function decrement() {
    const nextValue = value - step;
    if (minValue === undefined || nextValue >= minValue) {
      setValue(nextValue);
      onChange && onChange(nextValue);
    }
  }

  function increment() {
    const nextValue = value + step;
    if (maxValue === undefined || nextValue <= maxValue) {
      setValue(nextValue);
      onChange && onChange(nextValue);
    }
  }

  const strValue = isPercent ? `${value}%` : value.toString();

  return (
    <Cont>
      <Modifier onClick={decrement}>-</Modifier>
      <StyledInput
        type="text"
        value={strValue}
        disabled={true}
        size={strValue.length}
      />
      <Modifier onClick={increment}>+</Modifier>
    </Cont>
  );
};

IncrementField.defaultProps = defaultProps;

export default IncrementField;
