import React from 'react';
import { ImageBackground, StyleSheet, Text, View } from 'react-native';
import { arcticBlast, grey, red, white } from '../../assets/colors';
import Card from '../Card/Card';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import WoodBG from '../../assets/images/WoodBG.png';

const WalletCard = ({ testID, balance, style, onPress, ...props }) => {
  const styles = StyleSheet.create({
    cardStyle: {
      padding: 5,
    },
    cardHeader: {
      padding: 10,
      paddingBottom: 50,
    },
    cardFooter: {
      backgroundColor: red,
      padding: 10,
    },
    flexRow: {
      flexDirection: 'row',
    },
    headerText: {
      fontSize: 18,
      fontWeight: '600',
      color: grey,
    },
    currencyText: {
      fontSize: 12,
      fontWeight: '400',
      color: arcticBlast,
    },
    amountText: {
      fontSize: 40,
      fontWeight: '700',
      color: arcticBlast,
    },
    footerText: {
      marginLeft: 20,
      color: white,
    },
    fakeKeepRIght: {
      marginLeft: 180,
    },
  });
  return (
    <Card
      testID={testID}
      accessible={false}
      style={[styles.cardStyle, style]}
      onPress={onPress}
      {...props}>
      <ImageBackground
        source={WoodBG}
        height="100%"
        width="100%"
        style={styles.cardHeader}>
        <Text style={styles.headerText}>Pulse Wallet</Text>
        <View style={styles.flexRow}>
          <Text style={styles.currencyText}>S$</Text>
          <Text style={styles.amountText}>{balance}</Text>
        </View>
      </ImageBackground>
      <View style={[styles.flexRow, styles.cardFooter]}>
        <Icon name="wallet-outline" color={white} size={20} />
        <Text style={styles.footerText}>Tap to view more</Text>
        <Icon
          style={styles.fakeKeepRIght}
          name="chevron-right-circle-outline"
          color={white}
          size={20}
        />
      </View>
    </Card>
  );
};

export default WalletCard;
