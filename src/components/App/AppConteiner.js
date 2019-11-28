import { connect } from 'react-redux';
import { getExpenses } from '../../redux/Selectors';
import App from './App';

const mapStateToProps = state => {
  return {
    expenses: getExpenses(state),
  };
};

export default connect(mapStateToProps)(App);
