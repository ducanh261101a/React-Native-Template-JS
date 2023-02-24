import React from 'react';
import { Text } from 'react-native';
import { fontTheme } from '~shared/theme';

const AppText = (props) => {
  return (
    <Text
      style={{
        fontFamily: fontTheme.primary,
        ...props.style,
      }}
      {...props}
    >
      {props.children}
    </Text>
  );
};

export default AppText;
