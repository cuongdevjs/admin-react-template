/*
 *
 * Login reducer
 *
 */
import produce from 'immer';
import {
  FAKE_ASYNC_LOADS,
  FAKE_ASYNC_LOADED,
  FAKE_ASYNC_LOAD_ERR,
} from './constants';

export const initialState = {
  resultFakeAction: [],
  loading: false,
  success: false,
  error: false,
};

/* eslint-disable default-case, no-param-reassign */
const loginReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case FAKE_ASYNC_LOADS:
        draft.success = false;
        draft.loading = true;
        draft.error = false;
        break;
      case FAKE_ASYNC_LOADED:
        draft.resultFakeAction = action.payload;
        draft.success = true;
        draft.loading = false;
        draft.error = false;
        break;
      case FAKE_ASYNC_LOAD_ERR:
        draft.success = false;
        draft.loading = false;
        draft.error = true;
        break;
    }
  });

export default loginReducer;
