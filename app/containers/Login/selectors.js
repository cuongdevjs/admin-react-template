import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the login state domain
 */

const selectLoginState = state => state.login || initialState;

const makeSelectResult = () =>
  createSelector(
    selectLoginState,
    state => state.resultFakeAction,
  );

const makeSelectActionLoads = () =>
  createSelector(
    selectLoginState,
    state => state.loading,
  );
const makeSelectActionLoaded = () =>
  createSelector(
    selectLoginState,
    state => state.success,
  );
const makeSelectActionError = () =>
  createSelector(
    selectLoginState,
    state => state.error,
  );

export {
  makeSelectResult,
  makeSelectActionLoads,
  makeSelectActionLoaded,
  makeSelectActionError,
};
