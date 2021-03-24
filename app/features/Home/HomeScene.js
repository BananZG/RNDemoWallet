import React from 'react';
import { ImageBackground, StyleSheet, View } from 'react-native';
import DummyLanding from '../../assets/images/DummyLanding.png';

import WalletCard from '../../components/WalletCard/WalletCard';

const HomeScene = ({ navigation }) => {
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
          style={styles.wallet}
          onPress={() => navigation.navigate('WalletLanding')}
        />
      </ImageBackground>
    </View>
  );
};

export default HomeScene;
