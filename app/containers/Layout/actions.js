/*
 *
 * Layout actions
 *
 */

import { CHANGE_COLLAPSE_MENU } from './constants';

export function changeCollapseMenu(payload) {
  return {
    type: CHANGE_COLLAPSE_MENU,
    payload,
  };
}
