import React, { useState } from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from '../../components/Card/Card';
import SpinBG from '../../assets/images/games/spin.png';
import FarmBG from '../../assets/images/games/farm.jpeg';
import FishBG from '../../assets/images/games/fish.jpeg';
import CarBG from '../../assets/images/games/car.jpeg';
import HospitalBG from '../../assets/images/games/hospital.jpg';
import { black } from '../../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import RedeemModal from './RedeemModal';

const UIConfigs = [
  {
    bg: SpinBG,
    label: 'Spin The Wheel',
    energy: 3,
    countdown: '7 mins',
    onPress: nav => nav.navigate('SpinTheWheel'),
  },
  {
    bg: FarmBG,
    label: 'Happy Farming',
    energy: 3,
    countdown: '9 mins',
  },
  {
    bg: FishBG,
    label: 'Go Fishing',
    energy: 2,
    countdown: '7 mins',
  },
  {
    bg: CarBG,
    label: 'Car Factory',
    energy: 4,
    countdown: '4 mins',
  },
  {
    bg: HospitalBG,
    label: 'Hospital',
    energy: 5,
    countdown: 'Full',
  },
];

const WalletGamesScene = ({ navigation, points }) => {
  const [showRedemption, setShowRedemption] = useState(false);
  const styles = StyleSheet.create({
    list: {
      paddingHorizontal: 20,
      marginVertical: 20,
    },
    card: {
      padding: 5,
      marginVertical: 10,
    },
    cardBG: {
      height: 150,
    },
    cardText: {
      fontSize: 20,
      fontWeight: '500',
      color: black,
    },
    pointsRow: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
    },
    pointsText: {
      alignSelf: 'flex-end',
      fontSize: 14,
      fontWeight: '500',
      color: black,
    },
    pointsBoldText: {
      alignSelf: 'flex-end',
      fontSize: 20,
      fontWeight: '700',
      color: black,
    },
    redeemButton: {
      marginLeft: 80,
    },
    flexRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
    },
    heart: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
  });

  const headerComponent = (
    <View style={styles.pointsRow}>
      <RedeemModal
        modalVisible={showRedemption}
        onClose={() => setShowRedemption(false)}
      />
      <Text style={styles.pointsText}>Your current points: </Text>
      <Text style={styles.pointsBoldText}>{points}</Text>
      <Text style={styles.pointsText}> pts</Text>
      <Card onPress={() => setShowRedemption(true)} style={styles.redeemButton}>
        <Text>Redeem</Text>
      </Card>
    </View>
  );

  const renderItem = ({ item }) => (
    <Card
      style={styles.card}
      onPress={item.onPress ? () => item.onPress(navigation) : null}>
      <ImageBackground source={item.bg} style={styles.cardBG} />
      <View style={styles.flexRow}>
        <Text style={styles.cardText}>{item.label}</Text>
        <View style={[styles.heart]}>
          {!!item.countdown && <Text>{item.countdown}</Text>}
          <Icon name={item.energy > 0 ? 'heart' : 'heart-outline'} size={20} />
          <Icon name={item.energy > 1 ? 'heart' : 'heart-outline'} size={20} />
          <Icon name={item.energy > 2 ? 'heart' : 'heart-outline'} size={20} />
          <Icon name={item.energy > 3 ? 'heart' : 'heart-outline'} size={20} />
          <Icon name={item.energy > 4 ? 'heart' : 'heart-outline'} size={20} />
        </View>
      </View>
    </Card>
  );

  const keyExtractor = (_, i) => i.toString();

  return (
    <FlatList
      style={styles.list}
      ListHeaderComponent={headerComponent}
      data={UIConfigs}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default connect(
  state => ({
    ...state.wallet,
  }),
  {
    /* func */
  },
)(WalletGamesScene);
