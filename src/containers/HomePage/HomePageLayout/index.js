import { connect } from 'react-redux';

import { getQueryParam } from 'containers/Router/selectors';
import PureHomePageLayout from './PureHomePageLayout';

const mapStateToProps = state => ({
  unsubscribeToken: getQueryParam(state, 'token'),
});

const HomePageLayout = connect(mapStateToProps)(PureHomePageLayout);

export default HomePageLayout;
