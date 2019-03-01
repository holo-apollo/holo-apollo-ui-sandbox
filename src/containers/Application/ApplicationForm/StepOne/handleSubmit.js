// @flow
import type { FormikBag } from 'formik';
import type { IntlShape } from 'react-intl';
import { pick } from 'lodash';

import { type ApplicationData } from 'containers/Application/types';
import { api } from 'helpers/rest';
import messages from './messages';
import type { Values } from './types';

type Props = {
  applicationId?: number,
  intl: IntlShape,
  onSuccess: ApplicationData => void,
};

async function handleSubmit(
  values: Values,
  {
    props: {
      applicationId,
      intl: { formatMessage },
      onSuccess,
    },
    setSubmitting,
    setFieldError,
  }: FormikBag<Props, Values>
) {
  const requestValues = pick(values, [
    'category',
    'dataUsageAgreement',
    'email',
    'goodsDescription',
    'instagramName',
    'name',
    'philosophy',
    'sellingGoods',
  ]);
  let resp;
  if (applicationId) {
    resp = await api.put(
      `stores/applications/${applicationId}/`,
      requestValues
    );
  } else {
    resp = await api.post('stores/applications/', requestValues);
  }
  if (resp.ok && resp.data) {
    if (resp.data.id) {
      onSuccess(resp.data);
    } else {
      setFieldError(
        'nonFieldErrors',
        formatMessage(messages.unknownError, {
          errorCode: 'No application id in response data',
        })
      );
    }
  } else {
    if (resp.data) {
      Object.keys(resp.data).forEach(field => {
        setFieldError(field, resp.data[field][0]);
      });
      if (resp.data.detail) {
        setFieldError('nonFieldErrors', resp.data.detail);
      }
    } else {
      setFieldError(
        'nonFieldErrors',
        formatMessage(messages.unknownError, { errorCode: resp.status })
      );
    }
  }
  setSubmitting(false);
}

export default handleSubmit;
