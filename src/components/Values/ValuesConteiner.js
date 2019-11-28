import { connect } from 'react-redux';
import {
  getBudget,
  getValueOfExpenses,
  getBalance,
} from '../../redux/Selectors';
import Values from './Values';

const mapStateToProps = state => {
  return {
    budget: getBudget(state),
    expenses: getValueOfExpenses(state),
    balance: getBalance(state),
  };
};

export default connect(mapStateToProps)(Values);
