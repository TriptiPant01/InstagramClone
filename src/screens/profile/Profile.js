import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  Button,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

import Images from '../../Images';
import TabNavigator from './TabNavigator';

const {width} = Dimensions.get('window');
export const Profile = () => {
  return (
    <View style={styles.wrapper}>
      <View style={styles.headerItemWrapper}>
        <View style={styles.imageWrapper}>
          <Image source={Images.profilePicture} />
        </View>
        <View>
          <Text style={styles.nameStyle}>tripti.pant</Text>
          <TouchableOpacity style={styles.editTextWrapper}>
            <Text style={styles.EdittextStyle}>Edit Profile</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.yourStoryStyle}>
        {/* <Image source={Images.Pic1} style={{aspectRatio: 1}} /> */}
      </View>
      <View style={styles.listWrappers}>
        <TouchableOpacity style={styles.listStyle}>
          <Text style={styles.numberStyle}>40</Text>
          <Text style={styles.numnerTextStyle}>posts</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listStyle}>
          <Text style={styles.numberStyle}>172</Text>
          <Text style={styles.numnerTextStyle}>followers</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.listStyle}>
          <Text style={styles.numberStyle}>256</Text>
          <Text style={styles.numnerTextStyle}>following</Text>
        </TouchableOpacity>
      </View>
      <TabNavigator />
    </View>
  );
};

const styles = StyleSheet.create({
  numnerTextStyle: {
    fontSize: 16,
    color: '#b6b6b6',
  },
  numberStyle: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  listStyle: {
    alignItems: 'center',
    // border,
  },
  wrapper: {
    flex: 1,
    backgroundColor: 'white',
  },
  headerItemWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 20,
  },
  textWrapper: {},
  imageWrapper: {
    height: 80,
    width: 80,
    borderRadius: 40,
    overflow: 'hidden',
    marginRight: 25,
  },
  EdittextStyle: {
    alignSelf: 'center',
    fontWeight: 'bold',
  },
  editTextWrapper: {
    width: width / 1.6,
    backgroundColor: 'white',
    borderColor: 'grey',
    borderWidth: 1,
    paddingHorizontal: 10,
    paddingVertical: 9,
    borderRadius: 5,
  },
  nameStyle: {
    // fontWeight: 'bold',
    fontSize: 20,
    marginBottom: 5,
  },
  yourStoryStyle: {
    height: 80,
    width: 80,
    borderColor: 'grey',
    borderWidth: 1,
    marginLeft: 15,
    borderRadius: 40,
    overflow: 'hidden',
    padding: 10,
  },
  listWrappers: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
    borderColor: '#b6b6b6',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    paddingVertical: 20,
  },
});
