import React from 'react';
import './ExpensesTable.module.css';
import Button from '../shared/Button';

const ExpensesTable = ({ items = [], onRemove }) => (
  <table>
    <thead>
      <tr>
        <th>Expense name</th>
        <th>Expense amount</th>
        <th />
      </tr>
    </thead>
    <tbody>
      {items.map(({ id, name, amount }) => (
        <tr key={id}>
          <td>{name}</td>
          <td>{amount}</td>
          <td>
            <Button label="Delete" onClick={() => onRemove(id)} />
          </td>
        </tr>
      ))}
    </tbody>
  </table>
);

export default ExpensesTable;
