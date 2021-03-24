import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import { connect } from 'react-redux';
import DummyLanding from '../../assets/images/DummyLanding.png';

import WalletCard from '../../components/WalletCard/WalletCard';
import { getBalance } from '../../reducers/WalletReducer/WalletSelectors';

const HomeScene = ({ navigation, balance }) => {
  const styles = StyleSheet.create({
    backgroundStyle: {
      flex: 1,
    },
    image: {
      flex: 1,
      paddingTop: 50,
    },
    wallet: {
      margin: 14,
    },
  });

  return (
    <View style={styles.backgroundStyle}>
      <ImageBackground
        source={DummyLanding}
        resizeMode="stretch"
        height="100%"
        style={styles.image}>
        <WalletCard
          balance={balance}
          style={styles.wallet}
          onPress={() => navigation.navigate('WalletLanding')}
        />
      </ImageBackground>
    </View>
  );
};

export default connect(
  state => ({
    balance: getBalance(state),
  }),
  {
    /* func */
  },
)(HomeScene);
