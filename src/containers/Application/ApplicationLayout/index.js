import { withState } from 'recompose';

import PureApplicationLayout from './PureApplicationLayout';

const ApplicationLayout = withState('isSuccess', 'setSuccess', false)(
  PureApplicationLayout
);

export default ApplicationLayout;
