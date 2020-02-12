/*
 *
 * Layout reducer
 *
 */
import produce from 'immer';
import { CHANGE_COLLAPSE_MENU } from './constants';

export const initialState = {
  isCollapseMenu: false,
};

/* eslint-disable default-case, no-param-reassign */
const layoutReducer = (state = initialState, action) =>
  produce(state, draft => {
    switch (action.type) {
      case CHANGE_COLLAPSE_MENU:
        draft.isCollapseMenu = action.payload;
        break;
    }
  });

export default layoutReducer;
