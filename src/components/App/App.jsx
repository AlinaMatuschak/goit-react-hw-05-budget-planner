import React from 'react';
import { app } from './App.module.css';
import BudgetForm from '../BudgetForm';
import Values from '../Values';
import ExpenseForm from '../ExpenseForm';
import ExpensesTable from '../ExpensesTable';

const App = ({ expenses }) => (
  <div className={app}>
    <BudgetForm />
    <Values />
    <ExpenseForm />
    {expenses.length > 0 && <ExpensesTable />}
  </div>
);

export default App;
