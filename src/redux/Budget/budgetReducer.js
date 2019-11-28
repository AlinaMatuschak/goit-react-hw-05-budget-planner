import SAVE_BUDGET from './budgetTypes';

const budgetReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case SAVE_BUDGET:
      return payload.value;

    default:
      return state;
  }
};

export default budgetReducer;
