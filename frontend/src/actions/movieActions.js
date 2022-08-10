import Axios from "axios";
import api from "../api";
import {
  MOVIE_LIKE_FAIL,
  MOVIE_LIKE_REQUEST,
  MOVIE_LIKE_SUCCESS,
  MOVIE_LIST_FAIL,
  MOVIE_LIST_REQUEST,
  MOVIE_LIST_SUCCESS,
} from "../constants/movieConstants";

export const listMovies = () => async (dispatch) => {
  dispatch({
    type: MOVIE_LIST_REQUEST,
  });
  try {
    const { data } = await Axios.get(`${api}/api/movies`);
    if (data.success) {
      dispatch({ type: MOVIE_LIST_SUCCESS, payload: data.movies });
    } else {
      dispatch({ type: MOVIE_LIST_FAIL });
    }
    return data;

    // dispatch({ type: MOVIE_LIST_SUCCESS, payload: data });
  } catch (error) {
    dispatch({ type: MOVIE_LIST_FAIL, payload: error.message });
  }
};

export const likeMovies = (movieId, userId) => async (dispatch) => {
  dispatch({
    type: MOVIE_LIKE_REQUEST,
    payload: { movieId, userId },
  });
  try {
    const { data } = await Axios.post(`${api}/api/movies/like/${movieId}`, {
      userId,
    });

    if (data.success) {
      dispatch({ type: MOVIE_LIKE_SUCCESS, payload: data.movie });
    } else {
      dispatch({ type: MOVIE_LIKE_FAIL });
    }
    return data;
    // dispatch({ type: MOVIE_LIKE_SUCCESS, payload: data.movie });
  } catch (error) {
    dispatch({ type: MOVIE_LIKE_FAIL, payload: error.message });
  }
};
