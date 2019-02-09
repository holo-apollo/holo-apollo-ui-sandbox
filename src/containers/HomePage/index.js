import createLoadable from 'react-loadable';

import LoadingPage from 'containers/LoadingPage';

const HomePage = createLoadable({
  loader: () =>
    import(/* webpackChunkName: 'home-page' */ './NotLoadableHomePage'),
  loading: LoadingPage,
});

export default HomePage;
