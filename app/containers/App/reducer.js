/*
 * AppReducer
 *
 * The reducer takes care of our data. Using actions, we can
 * update our application state. To add a new action,
 * add it to the switch statement in the reducer function
 *
 */

import produce from 'immer';
import {
  SET_INFO_USER,
  CHANGE_IS_LOGGED,
  LOADING_START,
  LOADING_END,
  RESET_STATE_GLOBAL,
} from './constants';

// The initial state of the App
export const initialState = {
  loading: 0,
  isLogged: false,
  infoUser: null,
};

/* eslint-disable default-case, no-param-reassign */
const appReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case SET_INFO_USER:
        draft.infoUser = action.payload;
        break;
      case CHANGE_IS_LOGGED:
        draft.isLogged = action.payload;
        break;
      case LOADING_START:
        draft.loading += 1;
        break;
      case LOADING_END:
        draft.loading -= 1;
        break;
      case RESET_STATE_GLOBAL:
        draft.loading = 0;
        draft.isLogged = false;
        draft.infoUser = null;
        break;
    }
  });

export default appReducer;
