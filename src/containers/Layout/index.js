// @flow
import * as React from 'react';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import type { State } from 'store/createReducer';
import { getCategories } from 'containers/Entities/Categories/selectors';
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

class NotConnectedLayout extends React.PureComponent<NotConnectedProps> {
  onLoginClick = () => {};

  onSignupClick = () => {};

  onSearch = () => {};

  render() {
    return (
      <PureLayout
        {...this.props}
        onLoginClick={this.onLoginClick}
        onSignupClick={this.onSignupClick}
        onSearch={this.onSearch}
      />
    );
  }
}

const mapStateToProps = (state: State) => ({
  categories: getCategories(state),
  isAuthenticated: false,
  goodOrdersCount: 0,
});

const withConnect = connect(mapStateToProps);

const Layout: React.ComponentType<Props> = compose(
  withIntl,
  withConnect
)(NotConnectedLayout);

export default Layout;
