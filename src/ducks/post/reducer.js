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
      return {
        ...state,
        posts: state.posts.filter((i) => i.id !== payload.id),
      };
    case actionTypes.DELETE_ALL_POST:
      return {
        ...state,
        posts: [],
      };
    case actionTypes.SET_CURRENT_POST:
      return {
        ...state,
        selected: {
          ...state.posts.find((i) => i.id === payload.id),
          visited: true, // prevent issues
        },
      };
    case actionTypes.SET_LOADER:
      return { ...state, loading: payload.loading };

    case actionTypes.SET_VISITED:
      return {
        ...state,
        posts: state.posts.map((i) =>
          i.id === payload.id ? { ...i, visited: true } : i
        ),
      };
    default:
      return state;
  }
};
