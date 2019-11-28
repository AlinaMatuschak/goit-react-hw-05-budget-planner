import React from 'react';
import { connect } from 'react-redux';
import './ExpensesTable.module.css';
import Button from '../shared/Button';
import { removeExpense } from '../../redux/Expense/expenseActions';
import { getExpenses } from '../../redux/Selectors';

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

const mapStateToProps = state => ({
  items: getExpenses(state),
});

const mapDispatchToProps = dispatch => ({
  onRemove: id => dispatch(removeExpense(id)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ExpensesTable);
