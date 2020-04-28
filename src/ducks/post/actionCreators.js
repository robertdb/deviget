import * as actionTypes from "./actionTypes";

// Command action
export const getPosts = () => ({
  type: actionTypes.GET_POSTS,
});

// event actions
export const apiSuccess = ({ response, feature, meta }) => ({
  type: `${feature} ${actionTypes.API_SUCCESS}`,
  payload: { response, meta },
});
export const apiError = ({ error, feature, meta }) => ({
  type: `${feature} ${actionTypes.API_FAILURE}`,
  payload: { error, meta },
});

// document actions
export const setPosts = ({ posts }) => ({
  type: actionTypes.SET_POSTS,
  payload: { posts },
});

export const deletePost = ({ id }) => ({
  type: actionTypes.DELETE_POST,
  payload: { id },
});

export const deleteAllPost = () => ({
  type: actionTypes.DELETE_ALL_POST,
});

export const setCurretPost = ({ id }) => ({
  type: actionTypes.SET_CURRENT_POST,
  payload: { id },
});

export const setLoader = ({ loading }) => ({
  type: actionTypes.SET_LOADER,
  payload: { loading },
});

export const setVisited = ({ id }) => ({
  type: actionTypes.SET_VISITED,
  payload: { id },
});
