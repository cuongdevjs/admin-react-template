/**
 * The global state selectors
 */

import { createSelector } from 'reselect';
import { initialState } from './reducer';

const selectGlobal = state => state.global || initialState;

const selectRouter = state => state.router;

const makeSelectUser = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.infoUser,
  );

const makeSelectLoading = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.loading,
  );

const makeSelectIsLogged = () =>
  createSelector(
    selectGlobal,
    globalState => globalState.isLogged,
  );

const makeSelectLocation = () =>
  createSelector(
    selectRouter,
    routerState => routerState.location,
  );

export {
  selectGlobal,
  makeSelectUser,
  makeSelectLoading,
  makeSelectLocation,
  makeSelectIsLogged,
};
