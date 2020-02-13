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

export const LOADING_START = `${PREFIX_CONSTANTS}/App/LOADING_START`;
export const LOADING_END = `${PREFIX_CONSTANTS}/App/LOADING_END`;
export const CHANGE_IS_LOGGED = `${PREFIX_CONSTANTS}/App/CHANGE_IS_LOGGED`;
export const GET_INFO_USER = `${PREFIX_CONSTANTS}/App/GET_INFO_USER`;
export const SET_INFO_USER = `${PREFIX_CONSTANTS}/App/SET_INFO_USER`;
export const RESET_STATE_GLOBAL = `${PREFIX_CONSTANTS}/App/RESET_STATE_GLOBAL`;
