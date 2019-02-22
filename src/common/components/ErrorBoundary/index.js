import React, { PureComponent, Fragment } from 'react';
import * as Sentry from '@sentry/browser';

import { getEnv } from 'helpers/misc';

const sentryConfigured = !!getEnv('SENTRY_DSN');

class ErrorBoundary extends PureComponent {
  constructor(props) {
    super(props);
    this.state = { error: null };
  }

  static getDerivedStateFromError(error) {
    return { error };
  }

  componentDidCatch(error, errorInfo) {
    if (sentryConfigured) {
      Sentry.withScope(scope => {
        Object.keys(errorInfo).forEach(key => {
          scope.setExtra(key, errorInfo[key]);
        });
        Sentry.captureException(error);
      });
    }
  }

  render() {
    if (this.state.error) {
      // render fallback UI
      return (
        <Fragment>
          <h1>Something went wrong</h1>
          {sentryConfigured && (
            <a onClick={() => Sentry.showReportDialog()}>Report feedback</a>
          )}
        </Fragment>
      );
    } else {
      // when there's not an error, render children untouched
      return this.props.children;
    }
  }
}

export default ErrorBoundary;
