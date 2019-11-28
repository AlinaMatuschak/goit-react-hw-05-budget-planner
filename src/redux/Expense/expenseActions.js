import shortid from 'shortid';
import { SAVE_EXPENSE, REMOVE_EXPENSE } from './expenseTypes';

const saveExpense = (name, amount) => ({
  type: SAVE_EXPENSE,
  payload: {
    expense: {
      id: shortid.generate(),
      name,
      amount,
    },
  },
});

const removeExpense = id => ({
  type: REMOVE_EXPENSE,
  payload: {
    id,
  },
});

export { saveExpense, removeExpense };
