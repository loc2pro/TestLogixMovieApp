import {
  INIT_STATE_MOVIE,
  MOVIE_LIKE_FAIL,
  MOVIE_LIKE_REQUEST,
  MOVIE_LIKE_SUCCESS,
  MOVIE_LIST_FAIL,
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
} from "../constants/movieConstants";

const initialStateMovie = {
  movies: [],
  loading: true,
  error: {},
};

export const MoviesReducer = (state = initialStateMovie, action) => {
  const { type, payload } = action;

  switch (type) {
    //list
    case MOVIE_LIST_REQUEST:
      return { loading: true, ...state };
    case MOVIE_LIST_SUCCESS:
      return { loading: false, ...state, movies: payload };
    case MOVIE_LIST_FAIL:
      return { loading: false, ...state };

    //like

    case MOVIE_LIKE_REQUEST:
      return { loading: true, ...state };
    case MOVIE_LIKE_SUCCESS:
      return {
        ...state,
        loading: false,
        movies: state.movies.map((item) =>
          item._id === payload._id ? payload : item
        ),
      };
    case MOVIE_LIKE_FAIL:
      return { loading: false, ...state };

    default:
      return state;
  }
};

// export const movieListReducer = (
//   state = { loading: true, movies: [] },
//   action
// ) => {
//   switch (action.type) {
//     case MOVIE_LIST_REQUEST:
//       return { loading: true };
//     case MOVIE_LIST_SUCCESS:
//       return { loading: false, movies: action.payload };
//     case MOVIE_LIST_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };

// export const movieLikeReducer = (
//   state = { loading: true, likes: [] },
//   action
// ) => {
//   switch (action.type) {
//     case MOVIE_LIKE_REQUEST:
//       return { loading: true };
//     case MOVIE_LIKE_SUCCESS:
//       return {
//         ...state,
//         loading: false,
//         likes: state.likes.map((x) =>
//           x._id === action.payload._id ? { ...x, likes: action.payload } : { x }
//         ),
//       };
//     case MOVIE_LIKE_FAIL:
//       return { loading: false, error: action.payload };
//     default:
//       return state;
//   }
// };
