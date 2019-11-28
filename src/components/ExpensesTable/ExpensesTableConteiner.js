import { connect } from 'react-redux';
import { removeExpense } from '../../redux/Expense/expenseActions';
import { getExpenses } from '../../redux/Selectors';
import ExpensesTable from './ExpensesTable';

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
