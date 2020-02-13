/*
 * App Actions
 *
 * Actions change things in your application
 * Since this boilerplate uses a uni-directional data flow, specifically redux,
 * we have these actions which are the only way your application interacts with
 * your application state. This guarantees that your state is up to date and nobody
 * messes it up weirdly somewhere.
 */

import {
  CHANGE_IS_LOGGED,
  LOADING_END,
  LOADING_START,
  GET_INFO_USER,
  SET_INFO_USER,
  RESET_STATE_GLOBAL,
} from './constants';

export function loadingStart() {
  return { type: LOADING_START };
}

export function loadingEnd() {
  return { type: LOADING_END };
}

export function setInfoUser(payload) {
  return { type: SET_INFO_USER, payload };
}

export function getInfoUser() {
  return { type: GET_INFO_USER };
}

export function changeIsLogged(payload) {
  return { type: CHANGE_IS_LOGGED, payload };
}

export function resetStateGlobal() {
  return { type: RESET_STATE_GLOBAL };
}
