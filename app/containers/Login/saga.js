import { call, put, takeLatest } from 'redux-saga/effects';
import request from 'utils/request';
import { FAKE_ASYNC_LOADS } from './constants';
import { fakeAsyncLoaded, fakeAsyncLoadErr } from './actions';

export function* fakeAsyncAction() {
  const requestURL = `https://api.github.com/users/cuongdevjs/repos?type=all&sort=updated`;
  try {
    // Call our request helper (see 'utils/request')
    const result = yield call(request, requestURL);
    // eslint-disable-next-line no-console
    yield console.log(result);
    yield put(fakeAsyncLoaded(result));
  } catch (err) {
    yield put(fakeAsyncLoadErr(err));
  }
}

export default function* resultFakeAction() {
  yield takeLatest(FAKE_ASYNC_LOADS, fakeAsyncAction);
}
