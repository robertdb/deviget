export const feature = "[post]";

//* ACTION TYPES *//
// Command actions
export const GET_POSTS = `${feature} GET_POSTS`;

// Event actions
export const API_SUCCESS = "API_SUCCESS";
export const API_FAILURE = "API_FAILURE";

// Document actions(this actions always report to our reducer)
export const SET_POSTS = `${feature} SET_POSTS`;
export const DELETE_POST = `${feature} DELETE_POST`;
export const SET_CURRENT_POST = `${feature} SET_CURRENT_POST`;
export const SET_LOADER = `${feature} SET_LOADER`;
export const DELETE_ALL_POST = `${feature} DELETE_ALL_POST`;
export const SET_VISITED = `${feature} SET_VISITED`;
