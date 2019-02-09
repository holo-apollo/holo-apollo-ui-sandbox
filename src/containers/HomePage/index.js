import createLoadable from 'react-loadable';

import LoadingPage from 'containers/LoadingPage';

const HomePage = createLoadable({
  loader: () => import(/* webpackChunkName: 'home-page' */ './HomePageLayout'),
  loading: LoadingPage,
});

export default HomePage;
