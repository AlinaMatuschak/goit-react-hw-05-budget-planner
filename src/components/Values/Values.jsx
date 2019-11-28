import React from 'react';
import { section } from './Values.module.css';
import Value from './Value';

const Values = ({ budget, expenses, balance }) => (
  <section className={section}>
    <Value label="Budget" value={budget} isPositive />
    <Value label="Expenses" value={expenses} />
    <Value label="Balance" value={balance} isPositive={balance >= 0} />
  </section>
);

export default Values;
