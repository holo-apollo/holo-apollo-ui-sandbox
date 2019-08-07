import React from 'react';
import ApplicationLayout from './ApplicationLayout';

import { api } from 'helpers/rest';
import { addCategoryOptions } from './actions';

const Application = props => <ApplicationLayout {...props} />;

Application.getInitialProps = async ({ reduxStore }) => {
  // TODO: maybe use component state and pass down through context
  const resp = await api.get('stores/applications/categories/');
  if (resp.ok && resp.data) {
    reduxStore.dispatch(addCategoryOptions(resp.data));
  }
};

export default Application;
