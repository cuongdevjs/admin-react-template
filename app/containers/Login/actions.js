/*
 *
 * Login actions
 *
 */

import {
  FAKE_ASYNC_LOADS,
  FAKE_ASYNC_LOADED,
  FAKE_ASYNC_LOAD_ERR,
} from './constants';

export function fakeAsyncLoads() {
  return {
    type: FAKE_ASYNC_LOADS,
  };
}

export function fakeAsyncLoaded(payload) {
  return {
    type: FAKE_ASYNC_LOADED,
    payload,
  };
}

export function fakeAsyncLoadErr(payload) {
  return {
    type: FAKE_ASYNC_LOAD_ERR,
    payload,
  };
}
