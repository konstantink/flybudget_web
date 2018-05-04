import {RSAA} from 'redux-api-middleware';
import {withAuth} from 'reducers';

export const STATS_REQUEST = '@@expenses/STATS_REQUEST';
export const STATS_SUCCESS = '@@expenses/STATS_SUCCESS';
export const STATS_FAILURE = '@@expenses/STATS_FAILURE';

export const stats = () => ({
  [RSAA]: {
    endpoint: '/api/v1/stats/',
    method: 'GET',
    // body: JSON.stringify({message: message}),
    headers: withAuth({'Content-Type': 'application/json'}),
    types: [STATS_REQUEST, STATS_SUCCESS, STATS_FAILURE]
  }
});
