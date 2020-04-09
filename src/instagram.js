import React from 'react';
import {View, Text, StyleSheet, ScrollView, SafeAreaView} from 'react-native';

import Navigation from './navigation';
const InstagramClone = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 1}}>
        <Navigation />
      </View>
    </SafeAreaView>
  );
};

export default InstagramClone;
