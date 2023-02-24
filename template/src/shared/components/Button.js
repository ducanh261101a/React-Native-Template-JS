import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { useAppSelector } from '~shared/hooks';
import { AppText } from './AppText';

const CustomButton = (props) => {
  const { label, onPress, disabled } = props;
  const { color } = useAppSelector((state) => state.theme);

  return (
    <TouchableOpacity
      style={[
        { backgroundColor: disabled ? '#F3F6F6' : color.primary },
        styles.container,
      ]}
      onPress={onPress}
      disabled={disabled}
    >
      <AppText
        style={{
          color: disabled ? '#797C7B' : color.on_primary,
          ...styles.label,
        }}
      >
        {label}
      </AppText>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: 16,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  label: {
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default CustomButton;
