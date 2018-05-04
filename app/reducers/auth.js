import jwtDecode from 'jwt-decode';

import * as auth from 'actions/auth';

const initialState = {
  access: undefined,
  refresh: undefined,
  errors: {}
};

export default (state=initialState, action) => {
  switch(action.type){
  case auth.LOGIN_SUCCESS:
    return {
      access: {
        token: action.payload.access,
        ...jwtDecode(action.payload.access),
      },
      refresh: {
        token: action.payload.refresh,
        ...jwtDecode(action.payload.refresh)
      },
      errors: {}
    };
  case auth.TOKEN_RECEIVED:
    return {
      ...state,
      access: {
        token: action.payload.access,
        ...jwtDecode(action.payload.access)
      }
    };
  case auth.TOKEN_FAILURE:
  case auth.LOGIN_FAILURE:
    return {
      access: undefined,
      refresh: undefined,
      errors: action.payload.response ||
        {'non_field_errors': action.payload.statusText}
    };
  default:
    return state;
  }
};

export const accessToken = (state) => {
  if (state.access) {
    return state.access.token;
  }
};

export const refreshToken = (state) => {
  if (state.refresh) {
    return state.refresh.token;
  }
};

export const isAccessTokenExpired = (state) => {
  if (state.access && state.access.exp) {
    return 1000 * state.access.exp - (new Date()).getTime() < 5000;
  }
  return true;
};

export const isRefreshTokenExpired = (state) => {
  if (state.refresh && state.refresh.exp) {
    return 1000 * state.refresh.exp - (new Date()).getTime() < 5000;
  }
  return true;
};

export const isAuthenticated = (state) => {
  // debugger;
  return !isRefreshTokenExpired(state);
};

export const errors = (state) => {
  return state.errors;
};
