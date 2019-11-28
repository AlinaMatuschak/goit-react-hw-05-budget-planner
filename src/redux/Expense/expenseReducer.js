import { SAVE_EXPENSE, REMOVE_EXPENSE } from './expenseTypes';

const expenseReducer = (state = [], { type, payload }) => {
  switch (type) {
    case SAVE_EXPENSE:
      return [...state, payload.expense];

    case REMOVE_EXPENSE:
      return state.filter(expense => expense.id !== payload.id);

    default:
      return state;
  }
};

export default expenseReducer;
