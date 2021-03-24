import React from 'react';
import { Alert, StyleSheet, Text, Pressable, View } from 'react-native';
import Modal from 'react-native-modal';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { grey } from '../../assets/colors';

const ReferralModal = ({ modalVisible, onClose }) => {
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
        <Text style={styles.modalText}>Join Pulse with me and get S$5!</Text>
        <View style={styles.flexRow}>
          <Icon style={styles.icon} name="whatsapp" size={30} />
          <Icon style={styles.icon} name="facebook" size={30} />
          <Icon style={styles.icon} name="facebook-messenger" size={30} />
          <Icon style={styles.icon} name="wechat" size={30} />
          <Icon style={styles.icon} name="account-box-outline" size={30} />
        </View>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={onClose}>
          <Text style={styles.textStyle}>Close</Text>
        </Pressable>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modal: {
    justifyContent: 'flex-end',
  },
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
  flexRow: {
    flexDirection: 'row',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonClose: {
    marginTop: 20,
    backgroundColor: grey,
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
  icon: {
    margin: 10,
  },
});

export default ReferralModal;
