import { ADD_TRANSACTIONS_ACTION, TOP_UP_ACTION } from './WalletActions';

const INITIAL_STATE = {
  balance: 63.59,
  transactions: [
    {
      label: 'Pulse Subscription',
      amount: '- S$ 3.00',
      date: '20 March 20:30',
    },
    {
      label: 'Pulse Subscription',
      amount: '- S$ 3.00',
      date: '20 February 20:30',
    },
    {
      label: 'Top-up from Paynow',
      amount: '+ S$ 69.59',
      date: '19 February 17:20',
    },
  ],
};

const WalletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOP_UP_ACTION:
      return {
        ...state,
        balance: state.balance + action.payload,
        transactions: [action.transaction, ...state.transactions],
      };

    case ADD_TRANSACTIONS_ACTION:
      return {
        ...state,
        transactions: [action.payload, ...state.transactions],
      };

    default:
      return state;
  }
};

export default WalletReducer;
