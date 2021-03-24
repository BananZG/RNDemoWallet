import React, { useState } from 'react';
import {
  Alert,
  StyleSheet,
  Text,
  Pressable,
  View,
  TouchableOpacity,
} from 'react-native';
import Modal from 'react-native-modal';
import { connect } from 'react-redux';
import {
  convertPoints,
  addTransactions,
} from '../../reducers/WalletReducer/WalletActions';
import { blue, darkGrey, grey, red } from '../../assets/colors';
import moment from 'moment';
import Chip from '../../components/Chip/Chip';

const Options = [100, 200, 300, 500];
const RedeemModal = ({
  modalVisible,
  onClose,
  points,
  convertPoints,
  addTransactions,
}) => {
  const [selectedPts, setSelectedPts] = useState(Options[0]);
  const targetAmountNum = selectedPts / 100;
  const targetAmount = targetAmountNum.toFixed(2);
  return (
    <Modal
      animationType="slide"
      transparent
      visible={modalVisible}
      style={styles.modal}
      onRequestClose={() => {
        Alert.alert('Modal has been closed.');
        onClose();
      }}>
      <View style={styles.modalView}>
        <Text style={styles.modalText}>Redeem Points</Text>
        <View style={{ flexWrap: 'wrap', flexDirection: 'row', marginTop: 8 }}>
          {Options.map(e => (
            <Chip
              key={e}
              style={{ margin: 5 }}
              selected={selectedPts === e}
              onPress={() => {
                setSelectedPts(e);
              }}>
              {e}
            </Chip>
          ))}
        </View>
        {(points >= selectedPts && (
          <View>
            <Text style={styles.textStyle}>
              Converting {selectedPts} points to S${targetAmount}
            </Text>
            <TouchableOpacity
              style={[styles.button, styles.buttonConfirm]}
              onPress={() => {
                convertPoints(targetAmountNum, selectedPts);
                addTransactions(
                  'Converted points to Cash',
                  '+ S$ ' + targetAmount,
                  moment().format('DD MMMM HH:mm'),
                );
              }}>
              <Text>Confirm</Text>
            </TouchableOpacity>
          </View>
        )) || (
          <View>
            <Text style={[styles.textStyle, styles.textStyleError]}>
              Insufficient Points
            </Text>
            <TouchableOpacity
              disabled
              style={[styles.button, styles.buttonConfirmDisabled]}>
              <Text>Confirm</Text>
            </TouchableOpacity>
          </View>
        )}
        <TouchableOpacity
          style={[styles.button, styles.buttonClose]}
          onPress={onClose}>
          <Text>Close</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {},
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  textStyle: {
    marginTop: 30,
  },
  textStyleError: {
    color: red,
  },
  flexRow: {
    flexDirection: 'row',
  },
  button: {
    borderRadius: 20,
    alignItems: 'center',
    width: 200,
    padding: 10,
    elevation: 2,
    marginTop: 20,
  },
  buttonConfirm: {
    backgroundColor: blue,
  },
  buttonConfirmDisabled: {
    backgroundColor: darkGrey,
  },
  buttonClose: {
    backgroundColor: grey,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default connect(
  state => ({
    ...state.wallet,
  }),
  {
    convertPoints,
    addTransactions,
  },
)(RedeemModal);
