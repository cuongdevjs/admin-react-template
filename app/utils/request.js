import React from 'react';
import axios from 'axios';
import Qs from 'qs';
import { getItem } from './localStorage';
import { openMessageWithIcon, openNotificationWithIcon } from './mixins';

axios.defaults.baseURL = process.env.API_URL;
axios.defaults.headers.post['Content-Type'] = 'application/json';
axios.defaults.headers.post['Accept'] = 'application/json';

function setMessageErrorCode(code, message) {
  switch (code) {
    case code >= 500:
      return 'Server errors! Try again!';
    case 401:
      return 'Session login is expired! Redirect to login page!';
    case 403:
      return <div dangerouslySetInnerHTML={{ __html: message }} />;
  }
}

axios.interceptors.request.use(
  function(_config) {
    // Do something before request
    const token = getItem('danang-admin-token');
    if (token) {
      _config.headers.Authorization = `Bearer ${token}`;
    }
    _config.paramsSerializer = params =>
      Qs.stringify(params, {
        arrayFormat: 'brackets',
        encode: false,
      });
    return _config;
  },
  error => {
    console.log(error);
    return Promise.reject(error);
  },
);

axios.interceptors.response.use(
  response => {
    return response.data;
  },
  error => {
    if (error.response && error.response.status) {
      openNotificationWithIcon(
        'error',
        'Opps',
        setMessageErrorCode(
          error.response.status,
          error.response.status === 403 ? error.response.data.message : '',
        ),
        3,
      );
      Promise.reject(error.response);
    } else {
      return Promise.reject(error);
    }
  },
);

export function $get(url, params) {
  return axios.get(url, {
    params,
  });
}

export function $post(url, _config) {
  return axios.post(url, _config);
}

export function $put(url, _config) {
  return axios.put(url, _config);
}

export function $delete(url, _config) {
  return axios.delete(url, { data: _config });
}

export default axios;
