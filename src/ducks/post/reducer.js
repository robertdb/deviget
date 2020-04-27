import * as actionTypes from "./actionTypes";

const initialState = {
  posts: [],
  loading: false,
  errors: null,
  selected: null,
};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case actionTypes.SET_POSTS:
      return {
        ...state,
        ...payload,
      };
    case actionTypes.DELETE_POST:
      return { ...state, posts: state.posts.filter((i) => i !== payload.id) };
    case actionTypes.SET_CURRENT_POST:
      return { ...state, selected: payload.post };
    case actionTypes.SET_LOADER:
      return { ...state, loading: payload.loading };
    default:
      return state;
  }
};
