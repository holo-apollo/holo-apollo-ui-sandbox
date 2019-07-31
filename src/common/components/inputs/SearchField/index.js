// @flow
import * as React from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';

import Magnifier from 'common/components/icons/Magnifier';
import useInput from 'common/hooks/useInput';

const Cont = styled.div`
  input {
    font-size: 12px;
    font-weight: 300;

    &::placeholder {
      font-style: italic;
    }
  }
`;

type Props = {
  placeholder: string,
  onSearch: string => void,
};

const SearchField = (props: Props) => {
  const { value, onChange } = useInput('');

  function handleKeyPress(event: KeyboardEvent) {
    if (event.key === 'Enter') {
      props.onSearch(value);
    }
  }

  return (
    <Cont>
      <Input
        type="search"
        value={value}
        onChange={onChange}
        onKeyPress={handleKeyPress}
        fullWidth={true}
        placeholder={props.placeholder}
        startAdornment={
          <InputAdornment position="start">
            <Magnifier height={13} />
          </InputAdornment>
        }
      />
    </Cont>
  );
};

export default SearchField;
