import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WheelOfFortune from 'react-native-wheel-of-fortune';
import { connect } from 'react-redux';
import { white } from '../../assets/colors';
import { topUp } from '../../reducers/WalletReducer/WalletActions';
import Knob from '../../assets/images/games/knob.png';

const participants = [15, 0, 5, 0, 0, 5, 0, 20, 0, 5];

const Wheels = ({ balance, topUp }) => {
  const [child, setChild] = useState(null);
  const [value, setValue] = useState(null);
  const [started, setStarted] = useState(false);

  const wheelOptions = {
    rewards: participants,
    knobSize: 20,
    borderWidth: 5,
    borderColor: '#000',
    innerRadius: 50,
    duration: 2000,
    backgroundColor: 'transparent',
    textAngle: 'horizontal',
    knobSource: Knob,
    onRef: setChild,
  };

  const buttonPress = () => {
    setStarted(true);
    child._onPress();
  };

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#E74C3C',
    },
    startButtonView: {
      paddingTop: 70,
      position: 'absolute',
    },
    startButton: {
      backgroundColor: 'rgba(0,0,0,.5)',
      marginTop: 30,
      padding: 5,
    },
    startButtonText: {
      fontSize: 50,
      color: '#fff',
      fontWeight: 'bold',
    },
    winnerView: {
      paddingTop: 70,
      position: 'absolute',
      justifyContent: 'center',
      alignItems: 'center',
    },
    winnerText: {
      fontSize: 30,
    },
    tryAgainButton: {
      padding: 5,
      backgroundColor: 'rgba(0,0,0,0.5)',
    },
    tryAgainText: {
      fontSize: 20,
      fontWeight: 'bold',
      color: '#fff',
    },
    pointsRow: {
      flexDirection: 'row',
      justifyContent: 'flex-start',
      marginTop: 30,
    },
    pointsText: {
      alignSelf: 'flex-end',
      fontSize: 14,
      fontWeight: '500',
      color: white,
    },
    pointsBoldText: {
      alignSelf: 'flex-start',
      fontSize: 20,
      fontWeight: '700',
      color: white,
    },
  });
  return (
    <View style={styles.container}>
      <View style={styles.pointsRow}>
        <Text style={styles.pointsText}>Your current balance: S$</Text>
        <Text style={styles.pointsBoldText}>{balance}</Text>
      </View>
      <WheelOfFortune
        options={wheelOptions}
        getWinner={v => {
          if (v > 0) {
            const dollar = v / 100;
            setValue(dollar);
            topUp(dollar, 'Game - Spin The Wheel');
          } else {
            setValue(0);
          }
        }}
      />
      {!started && (
        <View style={styles.startButtonView}>
          <TouchableOpacity onPress={buttonPress} style={styles.startButton}>
            <Text style={styles.startButtonText}>Spin to win!</Text>
          </TouchableOpacity>
        </View>
      )}
      {value != null && (
        <View style={styles.winnerView}>
          <Text style={styles.winnerText}>
            {value > 0
              ? `You win S$ ${value.toFixed(2)} !`
              : 'Better luck next time.'}
          </Text>
          <TouchableOpacity
            onPress={() => {
              setValue(null);
              child._tryAgain();
            }}
            style={styles.tryAgainButton}>
            <Text style={styles.tryAgainText}>TRY AGAIN</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

export default connect(
  state => ({
    ...state.wallet,
  }),
  {
    topUp,
  },
)(Wheels);
