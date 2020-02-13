import { call, put, take, fork, race, select } from 'redux-saga/effects';
import { clearAllLS, setItem } from '../../utils/localStorage';
import { historyPush } from '../../utils/mixins';
import { LOGIN_REQUEST, LOGOUT_REQUEST } from '../Login/constants';
import { requestLoginSuccess, requestLoginFail } from '../Login/saga';
import { $post } from '../../utils/request';
import {
  changeIsLogged,
  getInfoUser,
  resetStateGlobal,
  setInfoUser,
} from './actions';
import { $get } from '../../utils/request';
import { GET_INFO_USER } from './constants';

export function* watchAndLog() {
  while (true) {
    const styleConsole =
      'background: yellow; font-weight: bold; color: #40a9ff8c;';
    const action = yield take('*');
    const state = yield select();
    console.group(action.type);
    console.log('%cBefore State', styleConsole, state);
    console.info('%cDispatching', styleConsole, action);
    console.log('%cNext State', styleConsole, state);
    console.groupEnd(action.type);
  }
}

export function* authorize(username, password) {
  try {
    const result = yield call($post, '/jwt-auth/v1/token', {
      username,
      password,
    });
    yield call(setItem, 'danang-admin-token', result.token);
    yield put(changeIsLogged(true));
    yield call(requestLoginSuccess);
    return result;
  } catch {
    yield call(requestLoginFail);
    return false;
  }
}

export function* loginFlow() {
  while (true) {
    const { username, password } = yield take(LOGIN_REQUEST);
    const taskLogin = yield race({
      login: call(authorize, username, password),
      logout: take(LOGOUT_REQUEST),
    });
    if (taskLogin.login) {
      yield call(historyPush, '/home');
    }
  }
}

export function* logoutFlow() {
  while (true) {
    yield take(LOGOUT_REQUEST);
    yield put(resetStateGlobal());
    yield call(clearAllLS);
    yield call(historyPush, '/login');
  }
}

export function* getInfoUserFlow() {
  while (true) {
    yield take(GET_INFO_USER);
    const result = yield call($get, '/wp/v2/users/me');
    yield put(setInfoUser(result));
  }
}

export default function* authenFlow() {
  yield fork(watchAndLog);
  yield fork(logoutFlow);
  yield fork(loginFlow);
  yield fork(getInfoUserFlow);
}
