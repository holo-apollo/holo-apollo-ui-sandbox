// @flow
import { useState } from 'react';

type InputEvent = SyntheticInputEvent<HTMLInputElement>;

type UseInput<T> = T => { value: T, onChange: InputEvent => void };

const useInput: UseInput<any> = initialValue => {
  const [value, setValue] = useState(initialValue);

  function handleInputChange(event: InputEvent) {
    setValue(event.target.value);
  }

  return {
    value,
    onChange: handleInputChange,
  };
};

export default useInput;
