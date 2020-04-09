import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

export const CommonText = ({innerStyle, title}) => {
  return (
    <Text style={(styles.textStyle, {...innerStyle})}> {title || ''}</Text>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 24,
  },
});
