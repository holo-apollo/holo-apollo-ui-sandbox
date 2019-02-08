import Loadable from 'react-loadable';

import DoubleBounceSpinner from 'common/components/spinners/DoubleBounceSpinner';

// eslint-disable-next-line new-cap
const Application = Loadable({
  loader: () =>
    import(/* webpackChunkName: 'application' */ './NotLoadableApplication'),
  loading: DoubleBounceSpinner,
});

export default Application;
