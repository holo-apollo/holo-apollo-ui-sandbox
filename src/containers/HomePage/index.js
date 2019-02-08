import Loadable from 'react-loadable';

import DoubleBounceSpinner from 'common/components/spinners/DoubleBounceSpinner';

// eslint-disable-next-line new-cap
const HomePage = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'home-page' */ './NotLoadableHomePage'),
  loading: DoubleBounceSpinner,
});

export default HomePage;
