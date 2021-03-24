import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { black, white } from '../../assets/colors';

const DEFAULT_VALUES = {
  padding: 18,
  borderRadius: 8,
  shadowed: true,
  padded: true,
};

const Card = ({
  testID,
  children,
  style,
  onPress,
  onLongPress,
  padded = DEFAULT_VALUES.padded,
  shadowed = DEFAULT_VALUES.shadowed,
  ...props
}) => {
  const styles = StyleSheet.create({
    base: {
      padding: padded ? DEFAULT_VALUES.padding : 0,
      borderRadius: DEFAULT_VALUES.borderRadius,
      backgroundColor: white,
    },
    shadowed: {
      elevation: 6,
      shadowOpacity: 0.1,
      shadowRadius: 5,
      shadowColor: black,
      shadowOffset: { width: 2, height: 8 },
    },
  });
  return (
    <TouchableOpacity
      testID={testID}
      accessible={false}
      style={[styles.base, shadowed ? styles.shadowed : {}, style]}
      disabled={!onPress && !onLongPress}
      onPress={onPress}
      onLongPress={onLongPress}
      {...props}>
      {children}
    </TouchableOpacity>
  );
};

export default Card;
