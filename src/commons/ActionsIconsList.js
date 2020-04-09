import React, {useState} from 'react';
import {View, Text, StyleSheet, Image, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import BookMark from 'react-native-vector-icons/Feather';
import Images from '../Images';

export const ActionsListIcons = () => {
  const [pressLikes, setPressLikes] = useState(false);
  return (
    <View style={styles.wrapper}>
      <View style={styles.Innerwrapper}>
        <TouchableOpacity>
          <Icon name="ios-heart-empty" size={40} color="black" />
        </TouchableOpacity>
        <Image source={Images.ChatIcon} style={styles.IconStyle} />
        <Image source={Images.Send} style={styles.IconStyle} />
      </View>
      <View style={{flex: 1, alignItems: 'flex-end'}}>
        <BookMark name="bookmark" size={35} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 10,
  },
  Innerwrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    flex: 0.6,
    justifyContent: 'space-between',
  },
  IconStyle: {
    height: 30,
    width: 30,
    resizeMode: 'contain',
  },
});
