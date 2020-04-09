import React from 'react';
import {
  View,
  Text,
  ScrollView,
  StyleSheet,
  Platform,
  StatusBar,
  Image,
} from 'react-native';

export const CommonHeader = ({centerContent, leftContent, rightContent}) => {
  return (
    <View style={styles.headerWrapper}>
      <Image source={leftContent} style={styles.ImageStyle} />
      <Text>{centerContent}</Text>
      <Image source={rightContent} style={styles.ImageStyle} />
    </View>
  );
};

const styles = StyleSheet.create({
  headerWrapper: {
    height: Platform.OS === 'ios' ? 44 : 60,
    backgroundColor: 'white',
    justifyContent: 'center',
    paddingHorizontal: 20,
    // paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  ImageStyle: {
    width: 25,
    height: 42,
    resizeMode: 'contain',
  },
});
