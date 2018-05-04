import * as expenses from 'actions/expenses';

const initialState = {
  expenses: []
};

export default (state=initialState, action) => {
  switch(action.type) {
  case expenses.EXPENSES_SUCCESS:
    return {
      expenses: action.payload
    };
  default:
    return state;
  }
};

export const serverExpenses = (state) => state.expenses;
