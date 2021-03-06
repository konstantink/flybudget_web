import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

import auth, * as fromAuth from 'reducers/auth';
import echo from 'reducers/echo';
import expenses from 'reducers/expenses';
import stats from 'reducers/stats';

export default combineReducers({
  auth: auth,
  echo: echo,
  expenses: expenses,
  stats: stats,
  router: routerReducer
});

export function withAuth(headers){
  return (state) => ({
    ...headers,
    'Authorization': `Bearer ${accessToken(state)}`
  });
}

export const isAuthenticated =
 state => fromAuth.isAuthenticated(state.auth);
export const accessToken =
  state => fromAuth.accessToken(state.auth);
export const isAccessTokenExpired =
  state => fromAuth.isAccessTokenExpired(state.auth);
export const refreshToken =
  state => fromAuth.refreshToken(state.auth);
export const isRefreshTokenExpired =
  state => fromAuth.isRefreshTokenExpired(state.auth);
export const authErrors =
  state => fromAuth.errors(state.auth);
