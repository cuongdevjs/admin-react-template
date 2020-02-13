import { put } from 'redux-saga/effects';
import { requestFail, requestSuccess } from './actions';

export function* requestLoginSuccess() {
  yield put(requestSuccess());
}

export function* requestLoginFail() {
  yield put(requestFail());
}
