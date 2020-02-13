import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the login state domain
 */

const selectLoginState = state => state.login || initialState;

const makeSelectActionLoading = () =>
  createSelector(
    selectLoginState,
    state => state.loading,
  );
const makeSelectActionSuccess = () =>
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
  makeSelectActionLoading,
  makeSelectActionSuccess,
  makeSelectActionError,
};
