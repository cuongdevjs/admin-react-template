/**
 *
 * Asynchronously loads the component for Hamburger
 *
 */

import loadable from 'utils/loadable';

export default loadable(() => import('./index'));
