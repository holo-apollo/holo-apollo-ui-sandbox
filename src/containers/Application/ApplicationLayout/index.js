import { connect } from 'react-redux';

import PureApplicationLayout from './PureApplicationLayout';
import { getApplicationPubDate } from '../selectors';

const mapStateToProps = state => ({
  pubDate: getApplicationPubDate(state),
});

const ApplicationLayout = connect(mapStateToProps)(PureApplicationLayout);

export default ApplicationLayout;
