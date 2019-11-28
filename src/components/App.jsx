import React from 'react';
import { connect } from 'react-redux';
import { app } from './App.module.css';
import { getExpenses } from '../redux/Selectors';
import BudgetForm from './BudgetForm';
import Values from './Values';
import ExpenseForm from './ExpenseForm';
import ExpensesTable from './ExpensesTable';

const App = ({ expenses }) => (
  <div className={app}>
    <BudgetForm />
    <Values />
    <ExpenseForm />
    {expenses.length > 0 && <ExpensesTable />}
  </div>
);

const mapStateToProps = state => {
  return {
    expenses: getExpenses(state),
  };
};

export default connect(mapStateToProps)(App);
