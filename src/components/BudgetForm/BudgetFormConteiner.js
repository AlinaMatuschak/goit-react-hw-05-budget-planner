import { connect } from 'react-redux';
import saveBudget from '../../redux/Budget/budgetActions';
import BudgetForm from './BudgetForm';

const mapDispatchToProps = dispatch => ({
  onSave: value => dispatch(saveBudget(value)),
});

export default connect(
  null,
  mapDispatchToProps,
)(BudgetForm);
