/*
 * AppConstants
 * Each action has a corresponding type, which the reducer knows and picks up on.
 * To avoid weird typos between the reducer and the actions, we save them as
 * constants here. We prefix them with 'yourproject/YourComponent' so we avoid
 * reducers accidentally picking up actions they shouldn't.
 *
 * Follow this format:
 * export const YOUR_ACTION_CONSTANT = 'yourproject/YourContainer/YOUR_ACTION_CONSTANT';
 */

export const PREFIX_CONSTANTS = 'boilerplate';

export const LOAD_ING = `${PREFIX_CONSTANTS}/App/LOAD_ING`;
export const LOAD_SUCCESS = `${PREFIX_CONSTANTS}/App/LOAD_SUCCESS`;
export const LOAD_ERROR = `${PREFIX_CONSTANTS}/App/LOAD_ERROR`;
export const CHANGE_IS_LOGGED = `${PREFIX_CONSTANTS}/App/CHANGE_IS_LOGGED`;
