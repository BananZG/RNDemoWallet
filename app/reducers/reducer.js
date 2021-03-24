import { combineReducers, createStore } from 'redux';
import WalletReducer from './WalletReducer/WalletReducer';

const reducers = combineReducers({
  wallet: WalletReducer,
});

export default createStore(reducers);
