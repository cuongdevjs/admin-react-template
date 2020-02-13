/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import {
  LOGIN_REQUEST,
  LOGOUT_REQUEST,
  REQUEST_FAIL,
  REQUEST_SUCCESS,
  RESET_STATE,
} from './constants';

export const initialState = {
  loading: false,
  success: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case LOGIN_REQUEST:
        draft.success = false;
        draft.loading = true;
        draft.error = false;
        break;
      case LOGOUT_REQUEST:
        draft.success = false;
        draft.loading = false;
        draft.error = false;
        break;
      case REQUEST_FAIL:
        draft.success = false;
        draft.loading = false;
        draft.error = true;
        break;
      case REQUEST_SUCCESS:
        draft.success = true;
        draft.loading = false;
        draft.error = false;
        break;
      case RESET_STATE:
        draft = initialState;
        break;
    }
  });

export default loginReducer;
