import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { darkBlue, grey, lightGrey } from '../../assets/colors';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { connect } from 'react-redux';
import { getTransactions } from '../../reducers/WalletReducer/WalletSelectors';

const PaymentHistoryScene = ({ transactions }) => {
  const styles = StyleSheet.create({
    list: {
      backgroundColor: lightGrey,
    },
    itemText: {
      marginLeft: 30,
      fontSize: 16,
      fontWeight: '700',
      color: darkBlue,
    },
    dateText: {
      marginLeft: 30,
      fontSize: 12,
      fontWeight: '400',
      color: darkBlue,
    },
    flexRow: {
      flexDirection: 'row',
      justifyContent: 'space-around',
      paddingHorizontal: 20,
      marginVertical: 20,
    },
    flexEnd: {
      flex: 1,
      flexDirection: 'row',
      justifyContent: 'flex-end',
    },
    amountText: {
      fontSize: 16,
      fontWeight: '700',
      color: darkBlue,
    },
    separator: {
      height: 1,
      backgroundColor: grey,
    },
  });

  const renderItem = ({ item }) => (
    <View style={styles.flexRow}>
      <Icon color={darkBlue} name="bottle-tonic-plus-outline" size={30} />
      <View>
        <Text style={styles.itemText}>{item.label}</Text>
        <Text style={styles.dateText}>{item.date}</Text>
      </View>
      <View style={styles.flexEnd}>
        <Text style={styles.amountText}>{item.amount}</Text>
      </View>
    </View>
  );

  const keyExtractor = (_, i) => i.toString();
  const separator = <View style={styles.separator} />;

  return (
    <FlatList
      style={styles.list}
      data={transactions}
      ItemSeparatorComponent={() => separator}
      renderItem={renderItem}
      keyExtractor={keyExtractor}
      ListFooterComponent={() => separator}
    />
  );
};

export default connect(
  state => ({
    transactions: getTransactions(state),
  }),
  {
    /* func */
  },
)(PaymentHistoryScene);
