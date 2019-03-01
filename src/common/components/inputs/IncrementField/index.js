// @flow
import * as React from 'react';
import autoBind from 'react-autobind';

import { Cont, StyledInput, Modifier } from './styled';

type Props = {
  initialValue: number,
  maxValue?: number,
  minValue?: number,
  step: number,
  onChange?: number => void,
  isPercent: boolean,
};

type State = {
  value: number,
};

const defaultProps = {
  initialValue: 0,
  step: 1,
  isPercent: false,
};

class IncrementField extends React.PureComponent<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = {
      value: props.initialValue,
    };
    autoBind(this);
  }

  static defaultProps = defaultProps;

  decrement() {
    const { minValue, step, onChange } = this.props;
    const { value } = this.state;
    const nextValue = value - step;
    if (minValue === undefined || nextValue >= minValue) {
      this.setState({ value: nextValue });
      onChange && onChange(nextValue);
    }
  }

  increment() {
    const { maxValue, step, onChange } = this.props;
    const { value } = this.state;
    const nextValue = value + step;
    if (maxValue === undefined || nextValue <= maxValue) {
      this.setState({ value: nextValue });
      onChange && onChange(nextValue);
    }
  }

  render() {
    const value = this.props.isPercent
      ? `${this.state.value}%`
      : this.state.value.toString();
    return (
      <Cont>
        <Modifier onClick={this.decrement}>-</Modifier>
        <StyledInput
          type="text"
          value={value}
          disabled={true}
          size={value.length}
        />
        <Modifier onClick={this.increment}>+</Modifier>
      </Cont>
    );
  }
}

export default IncrementField;
