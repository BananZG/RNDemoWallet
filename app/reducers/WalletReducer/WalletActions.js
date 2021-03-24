export const TOP_UP_ACTION = 'TOP_UP';
export const ADD_POINTS_ACTION = 'ADD_POINTS';
export const CONVERT_POINTS_TO_CASH = 'CONVERT_POINTS';
export const ADD_TRANSACTIONS_ACTION = 'ADD_TRANSACTIONS';

export const topUp = value => ({
  type: TOP_UP_ACTION,
  payload: value,
});

export const addPoints = value => ({
  type: ADD_POINTS_ACTION,
  payload: value,
});

export const convertPoints = (addBalance, deducePoints) => ({
  type: CONVERT_POINTS_TO_CASH,
  addBalance,
  deducePoints,
});

export const addTransactions = (label, amount, date) => ({
  type: ADD_TRANSACTIONS_ACTION,
  payload: {
    label,
    amount,
    date,
  },
});
