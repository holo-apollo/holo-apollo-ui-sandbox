// @flow
import * as React from 'react';
import { compose } from 'ramda';
import { connect } from 'react-redux';

import type { State } from 'store/createReducer';
import { getMainCategories } from 'containers/Entities/Categories/selectors';
import withIntl from 'lib/withIntl';
import PureLayout from './PureLayout';

type PureProps = React.ElementConfig<typeof PureLayout>;

type NotConnectedProps = $Exact<
  $Diff<
    PureProps,
    {
      onLoginClick: any,
      onSignupClick: any,
      onSearch: any,
    }
  >
>;

type Props = {
  withSearch: $PropertyType<NotConnectedProps, 'withSearch'>,
  crumbs: $PropertyType<NotConnectedProps, 'crumbs'>,
};

const NotConnectedLayout = (props: NotConnectedProps) => {
  function onLoginClick() {}

  function onSignupClick() {}

  function onSearch() {}

  return (
    <PureLayout
      {...props}
      onLoginClick={onLoginClick}
      onSignupClick={onSignupClick}
      onSearch={onSearch}
    />
  );
};

const mapStateToProps = (state: State) => ({
  categories: getMainCategories(state),
  isAuthenticated: false,
  goodOrdersCount: 0,
});

const withConnect = connect(mapStateToProps);

const Layout: React.ComponentType<Props> = compose(
  withIntl,
  withConnect
)(NotConnectedLayout);

export default Layout;
