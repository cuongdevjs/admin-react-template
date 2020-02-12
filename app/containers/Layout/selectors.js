import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the layout state domain
 */

const selectLayout = state => state.layout || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by Layout
 */

const makeSelectCollapseMenu = () =>
  createSelector(
    selectLayout,
    state => state.isCollapseMenu,
  );

export { makeSelectCollapseMenu };
