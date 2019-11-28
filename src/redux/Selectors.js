const getBudget = state => state.budget;

const getExpenses = state => state.expenses;

const getValueOfExpenses = state =>
  getExpenses(state).reduce((acc, expense) => acc + Number(expense.amount), 0);

const getBalance = state => getBudget(state) - getValueOfExpenses(state);

export { getBudget, getExpenses, getValueOfExpenses, getBalance };
