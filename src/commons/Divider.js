import React from 'react';
import {View, StyleSheet} from 'react-native';

export const Divider = () => {
  return <View style={styles.DividerWrapper} />;
};

const styles = StyleSheet.create({
  DividerWrapper: {
    width: '83%',
    height: StyleSheet.hairlineWidth,
    backgroundColor: '#B6B6B6',
    alignSelf: 'flex-end',
    marginVertical: 5,
  },
});
