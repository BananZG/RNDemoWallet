import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScene from './features/Home/HomeScene';
import WalletLandingScene from './features/WalletLanding/WalletLandingScene';
import PaymentHistoryScene from './features/PaymentHistory/PaymentHistoryScene';
import Wheels from './features/WalletGame/Wheels';
import { StatusBar, Text, useColorScheme } from 'react-native';
import { red } from './assets/colors';
import WalletGamesScene from './features/WalletGame/WalletGamesScene';

const Stack = createStackNavigator();

const HeaderRight = props => (
  // eslint-disable-next-line react-native/no-inline-styles
  <Text style={{ marginRight: 30, color: red, fontWeight: '600' }} {...props}>
    S$ 63.59
  </Text>
);

const HomeStack = () => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <NavigationContainer>
      <StatusBar barStyle={isDarkMode ? 'light-content' : 'dark-content'} />
      <Stack.Navigator screenOptions={{ headerTintColor: red }}>
        <Stack.Screen
          name="Home"
          component={HomeScene}
          options={{ title: '', headerStatusBarHeight: 0 }}
        />
        <Stack.Screen
          name="WalletLanding"
          component={WalletLandingScene}
          options={{
            title: 'My Wallet',
            headerRight: HeaderRight,
          }}
        />
        <Stack.Screen
          name="WalletGames"
          component={WalletGamesScene}
          options={{
            title: 'Wallet Games',
            headerRight: HeaderRight,
          }}
        />
        <Stack.Screen
          name="SpinTheWheel"
          component={Wheels}
          options={{
            title: 'Spin The Wheel',
            headerRight: HeaderRight,
          }}
        />
        <Stack.Screen
          name="PaymentHistory"
          component={PaymentHistoryScene}
          options={{
            title: 'Transaction History',
            headerRight: HeaderRight,
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default HomeStack;
