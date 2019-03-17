// @flow
import * as React from 'react';
import { withRouter } from 'next/router';
import { compose } from 'recompose';
import { connect } from 'react-redux';
import { normalize } from 'normalizr';

import type { State } from 'store/createReducer';
import { api } from 'helpers/rest';
import { updateGoodsMap } from 'containers/Entities/Goods/actions';
import {
  getGoodById,
  getGoodsByIds,
} from 'containers/Entities/Goods/selectors';
import { updateStoresMap } from 'containers/Entities/Stores/actions';
import { updateCategoriesMap } from 'containers/Entities/Categories/actions';
import { goodSchema } from 'helpers/normalize';
import PureGoodPage from './PureGoodPage';

type PureProps = React.ElementConfig<typeof PureGoodPage>;

type WithoutRouterProps = {
  router: {
    query: {
      id: number,
    },
  },
  good?: $PropertyType<PureProps, 'good'>,
  similarGoods: $PropertyType<PureProps, 'similarGoods'>,
};

type Props = {
  router: $PropertyType<WithoutRouterProps, 'router'>,
  similarGoodsIds: number[],
};

class GoodWithoutRouter extends React.PureComponent<WithoutRouterProps> {
  static async getInitialProps({ query, reduxStore }) {
    const goodResp = await api.get(`search/goods/${query.id}/`);
    const moreLikeThisResp = await api.get(
      `search/goods/${query.id}/more_like_this/?limit=4`
    );
    let goodsList = [];
    let similarGoodsIds = [];
    if (goodResp.ok && goodResp.data) {
      goodsList = goodsList.concat(goodResp.data);
    }
    if (moreLikeThisResp && moreLikeThisResp.data) {
      goodsList = [...goodsList, ...moreLikeThisResp.data];
      similarGoodsIds = moreLikeThisResp.data.map(item => item.id);
    }
    const { goods, stores, categories } = normalize(goodsList, [
      goodSchema,
    ]).entities;
    reduxStore.dispatch(updateGoodsMap(goods));
    reduxStore.dispatch(updateStoresMap(stores));
    reduxStore.dispatch(updateCategoriesMap(categories));
    return {
      similarGoodsIds,
    };
  }

  render() {
    if (!this.props.good) {
      // TODO: show 404
      return null;
    }
    return (
      <PureGoodPage
        good={this.props.good}
        similarGoods={this.props.similarGoods}
      />
    );
  }
}

const mapStateToProps = (state: State, ownProps: Props) => ({
  good: getGoodById(state, ownProps.router.query.id),
  similarGoods: getGoodsByIds(state, ownProps.similarGoodsIds),
});

const withConnect = connect(mapStateToProps);

const GoodPage = compose(
  withRouter,
  withConnect
)(GoodWithoutRouter);

export default GoodPage;
