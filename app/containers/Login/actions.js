/*
 *
 * Login actions
 *
 */

import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REQUEST_FAIL,
  REQUEST_SUCCESS,
  RESET_STATE,
} from './constants';

export function loginRequest(username, password) {
  return { type: LOGIN_REQUEST, username, password };
}

export function logoutRequest() {
  return { type: LOGOUT_REQUEST };
}

export function requestFail() {
  return { type: REQUEST_FAIL };
}

export function requestSuccess() {
  return { type: REQUEST_SUCCESS };
}

export function resetState() {
  return { type: RESET_STATE };
}
