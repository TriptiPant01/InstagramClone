import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

export const Icons = ({name, ...props}) => {
  return <Icon name={name} style={styles.iconWrapper} {...props} />;
};

const styles = StyleSheet.create({
  iconWrapper: {
    fontSize: 25,
  },
});
