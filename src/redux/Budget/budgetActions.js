import SAVE_BUDGET from './budgetTypes';

const saveBudget = value => {
  return {
    type: SAVE_BUDGET,
    payload: {
      value,
    },
  };
};

export default saveBudget;
