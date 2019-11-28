import { connect } from 'react-redux';
import { saveExpense } from '../../redux/Expense/expenseActions';
import ExpenseForm from './ExpenseForm';

const mapDispatchToProps = dispatch => ({
  onSave: (name, amount) => dispatch(saveExpense(name, amount)),
});

export default connect(
  null,
  mapDispatchToProps,
)(ExpenseForm);
