// @flow
import * as React from 'react';
import styled from 'styled-components';
import Input from '@material-ui/core/Input';
import InputAdornment from '@material-ui/core/InputAdornment';
import { withState } from 'recompose';

import Magnifier from 'common/components/icons/Magnifier';

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

type ControllableProps = Props & {
  value: string,
  setValue: string => void,
};

class ControllableSearchField extends React.PureComponent<ControllableProps> {
  handleInputChange = (event: SyntheticInputEvent<HTMLInputElement>) => {
    this.props.setValue(event.target.value);
  };

  handleKeyPress = (event: KeyboardEvent) => {
    if (event.key === 'Enter') {
      this.props.onSearch(this.props.value);
    }
  };

  render() {
    const { value, placeholder } = this.props;
    return (
      <Cont>
        <Input
          type="search"
          value={value}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          fullWidth={true}
          placeholder={placeholder}
          startAdornment={
            <InputAdornment position="start">
              <Magnifier height={13} />
            </InputAdornment>
          }
        />
      </Cont>
    );
  }
}

// $FlowFixMe
const withValue = withState('value', 'setValue', '');

const SearchField: React.ComponentType<Props> = withValue(
  ControllableSearchField
);

export default SearchField;
