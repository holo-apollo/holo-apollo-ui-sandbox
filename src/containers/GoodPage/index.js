// @flow
import * as React from 'react';
import { withRouter } from 'next/router';
import { compose } from 'recompose';
import { connect } from 'react-redux';

import type { State } from 'store/createReducer';
import Layout from 'containers/Layout';
import { api } from 'helpers/rest';
import { addGood } from 'containers/Entities/Goods/actions';
import { getGoodById } from 'containers/Entities/Goods/selectors';
import type { Good } from 'containers/Entities/Goods/types';

type Props = {
  router: {
    query: {
      id: number,
    },
  },
  good?: Good,
};

class GoodWithoutRouter extends React.PureComponent<Props> {
  static async getInitialProps({ query, reduxStore }) {
    const resp = await api.get(`goods/${query.id}`);
    if (resp.ok && resp.data) {
      reduxStore.dispatch(addGood(resp.data));
    }
  }

  render() {
    if (!this.props.good) {
      // TODO: show 404
      return null;
    }
    return (
      <Layout withSearch={true} crumbs={[]}>
        {this.props.good.name}
      </Layout>
    );
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
