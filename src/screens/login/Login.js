import React from 'react';
import {View, Text, ScrollView, StyleSheet, Image} from 'react-native';

import Images from '../../Images';
const Login = () => {
  return (
    <View style={styles.LoginWrapper}>
      <Image source={Images.Instalogo} />
      <Text>apple</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  LoginWrapper: {
    flex: 1,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export default Login;
