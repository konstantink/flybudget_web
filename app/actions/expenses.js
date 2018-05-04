import {RSAA} from 'redux-api-middleware';
import {withAuth} from 'reducers';

export const EXPENSES_REQUEST = '@@expenses/EXPENSES_REQUEST';
export const EXPENSES_SUCCESS = '@@expenses/EXPENSES_SUCCESS';
export const EXPENSES_FAILURE = '@@expenses/EXPENSES_FAILURE';

export const expenses = () => ({
  [RSAA]: {
    endpoint: '/api/v1/expenses/',
    method: 'GET',
    // body: JSON.stringify({message: message}),
    headers: withAuth({'Content-Type': 'application/json'}),
    types: [EXPENSES_REQUEST, EXPENSES_SUCCESS, EXPENSES_FAILURE]
  }
});
