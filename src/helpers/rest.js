// @flow
import { create } from 'apisauce';
import type { Store } from 'redux';

type Data = { [string]: any };

export const api = create({
  baseURL: process.env.API_ROOT || '/',
  headers: {
    post: {
      'Content-Type': 'application/json; charset=utf-8',
    },
    common: {
      'X-Requested-With': 'XMLHttpRequest',
    },
  },
});

export function uploadToS3(url: string, data: Data, file: File) {
  const formData = new FormData();

  // it is necessary to set key first for upload to S3
  if (Object.keys(data).includes('key')) {
    formData.append('key', data.key);
  }
  Object.keys(data)
    .filter(key => key !== 'key')
    .forEach(key => {
      const dataItem = data[key];
      formData.append(key, dataItem);
    });
  formData.append('file', file);
  return api.post(url, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
}

export function subscribeApiToStore(store: Store) {
  store.subscribe(() => {
    api.setHeader('Accept-Language', store.getState().language);
  });
}
