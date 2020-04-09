import React from 'react';
import {View, Text, TextInput, StyleSheet} from 'react-native';

import {Colors} from '../../constant/colors';
export default Search = () => (
  <View style={styles.wrapper}>
    <View style={styles.textInputWrapper}>
      <TextInput
        placeholder="Search"
        placeholderTextColor={Colors.borderColor}
        style={styles.textInputStyle}
      />
    </View>
  </View>
);

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  textInputStyle: {
    borderColor: Colors.borderColor,
    borderWidth: StyleSheet.hairlineWidth,
    textAlign: 'center',
    height: 30,
    borderRadius: 7,
  },
  textInputWrapper: {
    margin: 20,
  },
});
