import React from 'react';
import { TouchableOpacity, Text } from 'react-native';
import { black, darkBlue, white } from '../../assets/colors';

const Chip = ({ children, selected, onPress, style, ...buttonProps }) => {
  const textColor = selected ? white : black;
  return (
    <TouchableOpacity
      style={[
        {
          alignSelf: 'center',
          width: 'auto',
          paddingHorizontal: 8,
          paddingVertical: 8,
          borderRadius: 50,
          backgroundColor: selected ? darkBlue : white,
        },
        style,
      ]}
      onPress={onPress}
      accessible
      accessibilityLabel={children}
      {...buttonProps}>
      <Text
        size={14}
        style={{ fontStyle: 'italic', fontWeight: '700', color: textColor }}
        align="center">
        {children}
      </Text>
    </TouchableOpacity>
  );
};

export default Chip;
