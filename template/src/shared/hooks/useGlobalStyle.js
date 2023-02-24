import React from 'react';
import { StyleSheet } from 'react-native';
import { useAppSelector } from './useAppSelector';
import * as typo from '~shared/theme/index';

const getGlobalStyles = (props) => {
  const { color } = props;

  return StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: color.background,
    },
    title: {
      ...typo.h2,
    },
    label: {
      ...typo.h3,
    },
    text: {
      ...typo.p,
    },
  });
};

export const useGlobalStyle = () => {
  const { color } = useAppSelector((state) => state.theme);
  const styles = React.useMemo(() => getGlobalStyles({ color }), [color]);
  return styles;
};
