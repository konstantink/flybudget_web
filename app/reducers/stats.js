import * as stats from 'actions/stats';

const initialState = {
  stats: {}
};

export default (state=initialState, action) => {
  switch(action.type) {
  case stats.STATS_SUCCESS:
    return {
      stats: action.payload
    };
  default:
    return state;
  }
};

export const serverStats = (state) => state.stats;
