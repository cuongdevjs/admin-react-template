import { createSelector } from 'reselect';
import { initialState } from './reducer';

/**
 * Direct selector to the assetsPage state domain
 */

const selectAssetsPageDomain = state => state.assetsPage || initialState;

/**
 * Other specific selectors
 */

/**
 * Default selector used by AssetsPage
 */

const makeSelectAssetsPage = () =>
  createSelector(
    selectAssetsPageDomain,
    substate => substate,
  );

export default makeSelectAssetsPage;
export { selectAssetsPageDomain };
