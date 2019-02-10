// @flow
import { create } from 'apisauce';
import { isEmpty, isNil } from 'ramda';

type Data = { [string]: any };
type Files = FileList | File[];
type FilesMap = { [string]: Files };

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
  withCredentials: true,
});

export function requestWithFiles(
  method: 'post' | 'put',
  url: string,
  data: Data,
  files?: FilesMap = {}
) {
  if (!isNil(files) && !isEmpty(files)) {
    const formData = new FormData();
    Object.keys(files).forEach(key => {
      const fileList = files[key];
      for (let i = 0; i < fileList.length; i++) {
        const file = fileList[i];
        formData.append(key, file);
      }
    });
    Object.keys(data).forEach(key => {
      const dataItem = data[key];
      formData.append(key, dataItem);
    });
    return api[method](url, formData, {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    });
  }
  return api[method](url, data);
}
