import React, { PureComponent } from 'react';
import ApplicationLayout from './ApplicationLayout';

import { api } from 'helpers/rest';
import { addCategoryOptions } from './actions';

class Application extends PureComponent {
  static async getInitialProps({ reduxStore }) {
    const resp = await api.get('stores/applications/categories/');
    if (resp.ok && resp.data) {
      reduxStore.dispatch(addCategoryOptions(resp.data));
    }
  }

  render() {
    return <ApplicationLayout {...this.props} />;
  }
}

export default Application;
