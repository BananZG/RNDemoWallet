import * as React from 'react';
import { Provider } from 'react-redux';
import store from './reducers/reducer';
import HomeStackNavigator from './navigator';

const App = () => {
  return (
    <Provider store={store}>
      <HomeStackNavigator />
    </Provider>
  );
};

export default App;
