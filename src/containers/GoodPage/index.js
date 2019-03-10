// @flow
import * as React from 'react';
import { withRouter } from 'next/router';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { omit } from 'lodash';

import type { State } from 'store/createReducer';
import Layout from 'containers/Layout';
import { api } from 'helpers/rest';
import { addGood } from 'containers/Entities/Goods/actions';
import { getGoodById } from 'containers/Entities/Goods/selectors';
import type { Good } from 'containers/Entities/Goods/types';
import { addStore } from 'containers/Entities/Stores/actions';
import PureGoodPage from './PureGoodPage';

type PureProps = React.ElementConfig<typeof PureGoodPage>;

type Props = {
  router: {
    query: {
      id: number,
    },
  },
  good?: $PropertyType<PureProps, 'good'>,
};

class GoodWithoutRouter extends React.PureComponent<Props> {
  static async getInitialProps({ query, reduxStore }) {
    const resp = await api.get(`goods/${query.id}/`);
    if (resp.ok && resp.data) {
      const store = resp.data.sellerInfo;
      const good: Good = {
        ...omit(resp.data, ['sellerInfo']),
        sellerId: store.id,
      };
      reduxStore.dispatch(addStore(store));
      reduxStore.dispatch(addGood(good));
    }
  }

  render() {
    if (!this.props.good) {
      // TODO: show 404
      return null;
    }
    return <PureGoodPage good={this.props.good} />;
  }
}

const mapStateToProps = (state: State, ownProps) => ({
  good: getGoodById(state, ownProps.router.query.id),
});

const withConnect = connect(mapStateToProps);

const GoodPage = compose(
  withRouter,
  withConnect
)(GoodWithoutRouter);

export default GoodPage;
