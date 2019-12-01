import { createSelector } from 'reselect';

const getBudget = state => state.budget;

const getExpenses = state => state.expenses;

const getValueOfExpenses = createSelector(
  [getExpenses],
  expenses =>
    expenses.reduce((acc, expense) => acc + Number(expense.amount), 0),
);

const getBalance = state => getBudget(state) - getValueOfExpenses(state);

export { getBudget, getExpenses, getValueOfExpenses, getBalance };
