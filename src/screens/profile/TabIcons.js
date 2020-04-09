import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

import {Colors} from '../../constant/colors';
export const Icons = ({name, color}) => {
  return <Icon name={name} size={35} color={color} />;
};
