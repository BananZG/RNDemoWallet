import React from 'react';
import {
  FlatList,
  ImageBackground,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import Card from '../../components/Card/Card';
import FarmBG from '../../assets/images/games/farm.jpeg';
import FishBG from '../../assets/images/games/fish.jpeg';
import CarBG from '../../assets/images/games/car.jpeg';
import HospitalBG from '../../assets/images/games/hospital.jpg';
import { black } from '../../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';

const UIConfigs = [
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

const WalletGamesScene = () => {
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

  const renderItem = ({ item }) => (
    <Card style={styles.card}>
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
      data={UIConfigs}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
    />
  );
};

export default WalletGamesScene;
