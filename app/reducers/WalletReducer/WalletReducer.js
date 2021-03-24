import {
  ADD_POINTS_ACTION,
  ADD_TRANSACTIONS_ACTION,
  CONVERT_POINTS_TO_CASH,
  TOP_UP_ACTION,
} from './WalletActions';

const INITIAL_STATE = {
  balance: 63.59,
  points: 500,
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
      amount: '+ S$ 60.00',
      date: '19 February 17:20',
    },
  ],
};

const WalletReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case TOP_UP_ACTION:
      return { ...state, balance: state.balance + action.payload };

    case ADD_POINTS_ACTION:
      return { ...state, points: state.points + action.payload };

    case CONVERT_POINTS_TO_CASH:
      return {
        ...state,
        balance: state.balance + action.addBalance,
        points: state.points - action.deducePoints,
      };
    case ADD_TRANSACTIONS_ACTION:
      return {
        ...state,
        transactions: [action.action, ...state.transactions],
      };

    default:
      return state;
  }
};

export default WalletReducer;
