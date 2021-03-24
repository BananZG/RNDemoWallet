import moment from 'moment';

export const TOP_UP_ACTION = 'TOP_UP';
export const ADD_TRANSACTIONS_ACTION = 'ADD_TRANSACTIONS';

export const topUp = (value, desc) => ({
  type: TOP_UP_ACTION,
  payload: value,
  transaction: {
    label: desc,
    amount: `+ S$ ${value.toFixed(2)}`,
    date: moment().format('DD MMMM HH:mm'),
  },
});

export const addTransactions = (label, amount, date) => ({
  type: ADD_TRANSACTIONS_ACTION,
  payload: {
    label,
    amount,
    date,
  },
});
