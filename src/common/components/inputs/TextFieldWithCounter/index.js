// @flow
import * as React from 'react';

import TextField from 'common/components/inputs/TextField';
import useInput from 'common/hooks/useInput';
import { HelperCont, CounterCont } from './styled';

type Props = {
  onChange?: (SyntheticInputEvent<HTMLInputElement>) => void,
  maxLength: number,
  helperText?: React.Node,
};

const TextFieldWithCounter = (props: Props) => {
  const { value, onChange } = useInput('');

  function handleInputChange(event: SyntheticInputEvent<HTMLInputElement>) {
    onChange(event);
    props.onChange && props.onChange(event);
  }

  const helperText = (
    <HelperCont hasHelperText={Boolean(props.helperText)}>
      {props.helperText}
      <CounterCont>
        {value.length}/{props.maxLength}
      </CounterCont>
    </HelperCont>
  );

  return (
    <TextField
      {...props}
      value={value}
      onChange={handleInputChange}
      helperText={helperText}
    />
  );
};

export default TextFieldWithCounter;
