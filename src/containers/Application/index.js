import createLoadable from 'react-loadable';

import LoadingPage from 'containers/LoadingPage';

const Application = createLoadable({
  loader: () =>
    import(/* webpackChunkName: 'application' */ './ApplicationLayout'),
  loading: LoadingPage,
});

export default Application;
