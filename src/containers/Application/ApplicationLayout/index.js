import { connect } from 'react-redux';
import { withState, compose } from 'recompose';

import PureApplicationLayout from './PureApplicationLayout';
import { getApplicationPubDate } from '../selectors';

const mapStateToProps = state => ({
  pubDate: getApplicationPubDate(state),
});

const ApplicationLayout = compose(
  connect(mapStateToProps),
  withState('isSuccess', 'setSuccess', false)
)(PureApplicationLayout);

export default ApplicationLayout;
