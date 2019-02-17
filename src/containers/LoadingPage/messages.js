import { defineMessages } from 'react-intl';

const messages = defineMessages({
  error: {
    id: 'LoadingPage.error',
    defaultMessage: 'Error!',
  },
  retry: {
    id: 'LoadingPage.retry',
    defaultMessage: 'Retry',
  },
  timedOut: {
    id: 'LoadingPage.timedOut',
    defaultMessage: 'Taking a long time...',
  },
});

export default messages;
