export const getBalance = state => state.wallet.balance.toFixed(2);
export const getLastTransaction = state =>
  state.wallet.transactions && state.wallet.transactions.length > 0
    ? state.wallet.transactions[0]
    : null;
export const getTransactions = state => state.wallet.transactions ?? [];
