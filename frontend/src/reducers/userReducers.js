import {
  USER_DETAILS_FAIL,
  USER_DETAILS_REQUEST, USER_DETAILS_RESET, USER_DETAILS_SUCCESS, USER_LIST_FAIL, USER_LIST_REQUEST, USER_LIST_SUCCESS, USER_REGISTER_FAIL,
  USER_REGISTER_REQUEST,
  USER_REGISTER_SUCCESS,
  USER_SIGNIN_FAIL,
  USER_SIGNIN_REQUEST,
  USER_SIGNIN_SUCCESS,
  USER_SIGNOUT, USER_UPDATE_PROFILE_FAIL, USER_UPDATE_PROFILE_REQUEST, USER_UPDATE_PROFILE_RESET, USER_UPDATE_PROFILE_SUCCESS
} from "../constants/userConstants";

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { payload: true };
    case USER_REGISTER_SUCCESS:
      return { payload: false, userInfo: action.payload };
    case USER_REGISTER_FAIL:
      return { payload: false, error: action.payload };
    default:
      return state;
  }
};

export const userSigninReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_SIGNIN_REQUEST:
      return { payload: true };
    case USER_SIGNIN_SUCCESS:
      return { payload: false, userInfo: action.payload };
    case USER_SIGNIN_FAIL:
      return { payload: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};

export const listUserReducer = (
  state = { users: [], loading: true },
  action
) => {
  switch (action.type) {
    case USER_LIST_REQUEST:
      return { payload: true };
    case USER_LIST_SUCCESS:
      return { payload: false, users: action.payload };
    case USER_LIST_FAIL:
      return { payload: false, error: action.payload };
    default:
      return state;
  }
};