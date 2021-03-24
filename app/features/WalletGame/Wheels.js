import React, { useState } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import WheelOfFortune from 'react-native-wheel-of-fortune';
import Knob from '../../assets/images/games/knob.png';

const participants = [0, 5, 0, 0, 5, 0, 0, 10, 20];

const Wheels = () => {
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
  });
  return (
    <View style={styles.container}>
      <WheelOfFortune
        options={wheelOptions}
        getWinner={v => {
          setValue(v);
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
          <Text style={styles.winnerText}>You win {value} points !</Text>
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

export default Wheels;
