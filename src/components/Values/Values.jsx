import React from 'react';
import { connect } from 'react-redux';
import { section } from './Values.module.css';
import Value from './Value';
import {
  getBudget,
  getValueOfExpenses,
  getBalance,
} from '../../redux/Selectors';

const Values = ({ budget, expenses, balance }) => (
  <section className={section}>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={expenses} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </section>
);

const mapStateToProps = state => {
  return {
    budget: getBudget(state),
    expenses: getValueOfExpenses(state),
    balance: getBalance(state),
  };
};

export default connect(mapStateToProps)(Values);
